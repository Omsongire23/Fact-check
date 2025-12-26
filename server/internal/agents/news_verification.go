package agents

import (
	"context"
	"fmt"

	"techfact-trader/internal/models"

	"google.golang.org/adk/agent/llmagent"
)

// VerifyClaim defines the agent for fact-checking
func (m *AgentManager) VerifyClaim(ctx context.Context, claimText string) (*models.Verdict, error) {
	prompt := fmt.Sprintf("Verify this claim: %s", claimText)

	cfg := llmagent.Config{
		Name:        "NewsVerificationAgent",
		Description: "Expert fact-checker for tech news",
		Instruction: `You are an expert fact-checker for tech news. 
		Your goal is to verify claims.
		Output a structured verdict with reasoning.`,
	}

	responseText, err := m.RunAgentWithConfig(ctx, cfg, prompt)
	if err != nil {
		return nil, err
	}

	// Mocking parsing
	return &models.Verdict{
		IsTrue:          true,
		ConfidenceScore: 0.95,
		Reasoning:       responseText,
		Sources:         []string{"Simulated Source"},
	}, nil
}
