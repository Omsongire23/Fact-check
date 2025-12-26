package services

import (
	"crypto/sha256"
	"encoding/hex"
	"time"

	"techfact-trader/internal/models"

	"github.com/gocolly/colly/v2"
	"github.com/mmcdole/gofeed"
)

type NewsService struct {
	FeedParser *gofeed.Parser
	Collector  *colly.Collector
}

func NewNewsService() *NewsService {
	return &NewsService{
		FeedParser: gofeed.NewParser(),
		Collector:  colly.NewCollector(),
	}
}

func (s *NewsService) IngestRSS(feedURL string) ([]models.Article, error) {
	feed, err := s.FeedParser.ParseURL(feedURL)
	if err != nil {
		return nil, err
	}

	var articles []models.Article
	for _, item := range feed.Items {
		article := models.Article{
			ID:          generateID(item.Link),
			Title:       item.Title,
			URL:         item.Link,
			Summary:     item.Description,
			PublishedAt: getPublishTime(item),
			Source:      feed.Title,
		}

		// Use RSS content directly
		if item.Content != "" {
			article.Content = item.Content
		} else {
			article.Content = item.Description
		}

		articles = append(articles, article)
	}
	return articles, nil
}

// ScrapeContent is removed as we use RSS content directly for robustness
// func (s *NewsService) ScrapeContent(article *models.Article) error { ... }

// Helper to fill content (moved logic to IngestRSS)

func generateID(s string) string {
	h := sha256.New()
	h.Write([]byte(s))
	return hex.EncodeToString(h.Sum(nil))
}

func getPublishTime(item *gofeed.Item) time.Time {
	if item.PublishedParsed != nil {
		return *item.PublishedParsed
	}
	return time.Now()
}
