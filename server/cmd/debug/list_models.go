package main

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	"google.golang.org/genai"
)

func main() {
	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found")
	}

	apiKey := os.Getenv("GEMINI_API_KEY")
	if apiKey == "" {
		log.Fatal("GEMINI_API_KEY not set")
	}

	ctx := context.Background()
	client, err := genai.NewClient(ctx, &genai.ClientConfig{
		APIKey: apiKey,
	})
	if err != nil {
		log.Fatalf("Failed to create client: %v", err)
	}

	// Try to list models (if the SDK supports it easily, otherwise we try a simple generation)
	// The genai SDK listing might be different. Let's try to just generate with "gemini-1.5-flash" directly and see the specific error or success.

	modelsToTest := []string{"gemini-1.5-flash", "gemini-1.5-flash-001", "gemini-1.0-pro"}

	for _, m := range modelsToTest {
		fmt.Printf("Testing model: %s ... ", m)
		_, err := client.Models.GenerateContent(ctx, m, genai.Text("Hello"), nil)
		if err != nil {
			fmt.Printf("FAILED: %v\n", err)
		} else {
			fmt.Printf("SUCCESS\n")
		}
	}
}
