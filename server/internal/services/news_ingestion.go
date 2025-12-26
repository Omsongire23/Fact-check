package services

import (
	"crypto/sha256"
	"encoding/hex"
	"fmt"
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

func (s *NewsService) Ingest(url string) ([]models.Article, error) {
	// 1. Try treating as RSS feed
	feed, err := s.FeedParser.ParseURL(url)
	if err == nil && feed != nil {
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
			if item.Content != "" {
				article.Content = item.Content
			} else {
				article.Content = item.Description
			}
			articles = append(articles, article)
		}
		return articles, nil
	}

	// 2. Fallback: Treat as single article and scrape
	article := models.Article{
		ID:          generateID(url),
		URL:         url,
		PublishedAt: time.Now(),
		Source:      "Web Scrape",
	}

	found := false
	s.Collector.OnHTML("head > title", func(e *colly.HTMLElement) {
		article.Title = e.Text
		found = true
	})
	s.Collector.OnHTML("h1", func(e *colly.HTMLElement) {
		// Prefer H1 over title tag if available
		article.Title = e.Text
	})
	s.Collector.OnHTML("p", func(e *colly.HTMLElement) {
		article.Content += e.Text + "\n\n"
	})
	// Capture meta description
	s.Collector.OnHTML("meta[name=description]", func(e *colly.HTMLElement) {
		article.Summary = e.Attr("content")
	})

	err = s.Collector.Visit(url)
	if err != nil {
		return nil, err
	}

	s.Collector.Wait()

	if !found && article.Content == "" {
		return nil, fmt.Errorf("failed to scrape content or title from %s", url)
	}

	if article.Summary == "" && len(article.Content) > 200 {
		article.Summary = article.Content[:200] + "..."
	}

	return []models.Article{article}, nil
}

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
