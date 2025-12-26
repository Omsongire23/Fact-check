package agents

import (
	"context"
	"fmt"

	"techfact-trader/internal/models"

	"google.golang.org/adk/agent/llmagent"
)

func (m *AgentManager) RebalancePortfolio(ctx context.Context, portfolio *models.Portfolio, impact *models.ImpactAnalysis) ([]models.RebalanceRecommendation, error) {
	holdingsStr := ""
	for _, h := range portfolio.Holdings {
		holdingsStr += fmt.Sprintf("- %s: %.2f shares @ $%.2f\n", h.Ticker, h.Quantity, h.CostBasis)
	}

	prompt := fmt.Sprintf("Portfolio:\n%s\n\nNew Impact Analysis:\nTickers: %v\nSentiment: %.2f\nRisk: %s\n\nRecommend actions:",
		holdingsStr, impact.AffectedTickers, impact.SentimentScore, impact.RiskLevel)

	cfg := llmagent.Config{
		Name:        "PortfolioRebalancer",
		Description: "Portfolio manager",
		Instruction: `You are a portfolio manager. 
		Based on the user's current holdings and a recent news impact analysis, suggest trade actions.
		Provide a clear list of BUY/SELL/HOLD recommendations with reasoning.`,
	}

	responseText, err := m.RunAgentWithConfig(ctx, cfg, prompt)
	if err != nil {
		return nil, err
	}

	rec := models.RebalanceRecommendation{
		Ticker:    impact.AffectedTickers[0],
		Action:    models.ActionBuy,
		Quantity:  10,
		Reasoning: responseText,
	}

	return []models.RebalanceRecommendation{rec}, nil
}
