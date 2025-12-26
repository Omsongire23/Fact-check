package api

import (
	"net/http"

	"techfact-trader/internal/agents"
	"techfact-trader/internal/db"
	"techfact-trader/internal/services"

	"github.com/gin-gonic/gin"
)

type NewsHandler struct {
	NewsService  *services.NewsService
	ClaimRepo    *db.ClaimRepo
	AgentManager *agents.AgentManager
}

func NewNewsHandler(ns *services.NewsService, repo *db.ClaimRepo, am *agents.AgentManager) *NewsHandler {
	return &NewsHandler{
		NewsService:  ns,
		ClaimRepo:    repo,
		AgentManager: am,
	}
}

func (h *NewsHandler) Ingest(c *gin.Context) {
	var req struct {
		URL string `json:"url"`
	}
	if err := c.BindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	articles, err := h.NewsService.IngestRSS(req.URL)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to ingest RSS: " + err.Error()})
		return
	}

	// Async processing could be done here with a worker queue.
	// For simplicity, we'll process 1 article synchronously.
	if len(articles) > 0 {
		article := &articles[0] // Just take the first one

		// 1. Content is already populated from RSS
		// if err := h.NewsService.ScrapeContent(article); err != nil { ... }

		// 2. Initial Save
		if err := h.ClaimRepo.SaveArticle(c.Request.Context(), article); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to save article"})
			return
		}

		// 3. Run Agents (Simplified Sync Flow)
		// a. Impact Analysis
		impact, err := h.AgentManager.AnalyzeImpact(c.Request.Context(), article)
		if err == nil {
			article.Impact = impact
		}

		// b. Verify claims (assuming article title is the claim for now)
		verdict, err := h.AgentManager.VerifyClaim(c.Request.Context(), article.Title)
		if err == nil {
			// Attach verdict to a dummy claim
			// In real app, we'd extract claims first.
		}

		// Update DB
		h.ClaimRepo.SaveArticle(c.Request.Context(), article)

		c.JSON(http.StatusOK, gin.H{"message": "Ingested and processed", "article": article, "verdict": verdict, "impact": impact})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "No articles found"})
}
