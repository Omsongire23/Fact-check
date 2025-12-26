package main

import (
	"context"
	"log"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"

	"techfact-trader/internal/agents"
	"techfact-trader/internal/api"
	"techfact-trader/internal/config"
	"techfact-trader/internal/db"
	"techfact-trader/internal/services"
)

func main() {
	// Load .env file if it exists
	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found, relying on environment variables")
	}

	// 1. Load Config
	cfg := config.LoadConfig()

	// 2. Initialize Firestore
	ctx := context.Background()
	database, err := db.NewDB(ctx, cfg)
	if err != nil {
		log.Fatalf("Failed to init DB: %v", err)
	}
	defer database.Close()

	// 3. Initialize Services & Repos
	portfolioRepo := db.NewPortfolioRepo(database)
	claimRepo := db.NewClaimRepo(database)

	newsService := services.NewNewsService()
	alpacaService := services.NewAlpacaService(cfg)

	agentManager, err := agents.NewAgentManager(cfg)
	if err != nil {
		log.Fatalf("Failed to init Agent Manager: %v", err)
	}

	// 4. Initialize Handlers
	portfolioHandler := api.NewPortfolioHandler(portfolioRepo, agentManager, alpacaService)
	newsHandler := api.NewNewsHandler(newsService, claimRepo, agentManager)

	// 5. Setup Router
	r := gin.Default()

	r.POST("/news/ingest", newsHandler.Ingest)

	r.POST("/portfolio/upload", portfolioHandler.Upload)
	r.GET("/portfolio/:id/rebalance", portfolioHandler.Rebalance)
	r.GET("/portfolio/:id/benchmark", portfolioHandler.Benchmark)

	// 6. Start Server
	log.Printf("Starting server on port %s", cfg.Port)
	if err := r.Run(":" + cfg.Port); err != nil {
		log.Fatalf("Server failed: %v", err)
	}
}
