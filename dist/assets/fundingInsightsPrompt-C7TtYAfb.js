const t=`
Analyze the provided financial data and return a valid JSON string with funding insights following this exact structure:

REQUIRED FIELDS:
- debt_to_equity_ratio: string (decimal format, e.g., "1.03")
- debt_to_assets_ratio: string (percentage with % symbol, e.g., "50.6%")
- equity_ratio: string (percentage with % symbol, e.g., "49.4%")
- interest_coverage_ratio: string (with 'x' suffix, e.g., "15.6x")
- debt_service_coverage_ratio: string (with 'x' suffix, e.g., "4.5x")
- debt_profile: object with total debt, long/short term breakdown, interest rate, and maturity
- benchmark_ranges: object with ideal ranges as strings
- risk_assessment: object with risk levels for overall, liquidity, leverage, and interest rate
- funding_capacity: object with debt capacity metrics and recommendations
- funding_recommendations: array of strategy objects with description, priority, savings, timeframe, and risk impact
- insights: array of insight objects with type, category, message, impact level, and action required flag

IMPORTANT: Return ONLY a valid JSON string that can be parsed with JSON.parse(). Do not include any markdown formatting, code blocks, or additional text.
Focus on actionable funding strategies and risk management.
Provide 2-4 funding recommendations and 3-5 key insights.
All monetary amounts should be whole numbers without currency symbols.
Percentages should include the % symbol, ratios should include 'x' suffix where applicable.

Example response format:
{"debt_to_equity_ratio":"1.03","debt_to_assets_ratio":"50.6%",...}
`;export{t as fundingInsightsPrompt};
