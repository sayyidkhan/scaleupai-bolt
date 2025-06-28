const i=`
Analyze the provided financial data and return a valid JSON string with sensitivity analysis following this exact structure:

REQUIRED FIELDS:
- scenarios: array of scenario objects with impact strings (include + or - and $ symbol, e.g., "+$15,000")
- top_opportunities: object with profit_impact and cash_flow_impact arrays of opportunity objects
- implementation_matrix: object with immediate_actions, short_term_initiatives, and long_term_strategies arrays
- risk_factors: array of risk objects with potential_impact as negative numbers
- insights: array of insight objects with type, priority, insight text, action required, and impact potential
- summary: object with most impactful lever, quickest win, highest risk, and recommended focus areas

IMPORTANT: Return ONLY a valid JSON string that can be parsed with JSON.parse(). Do not include any markdown formatting, code blocks, or additional text.
Focus on realistic, actionable scenarios and opportunities.
Provide 4-7 scenarios, 3 opportunities per impact type, 2-3 items per implementation timeframe.
Include both positive and negative scenarios for comprehensive analysis.
All monetary impacts should include appropriate + or - signs and $ symbols in impact strings.

Example response format:
{"scenarios":[{"scenario_name":"Increase prices by 5%","profit_impact":"+$15,000",...}],...}
`;export{i as sensitivityAnalysisPrompt};
