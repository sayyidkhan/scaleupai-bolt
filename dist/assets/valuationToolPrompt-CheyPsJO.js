const t=`
Analyze the provided financial data and return a valid JSON string with valuation analysis following this exact structure:

REQUIRED FIELDS:
- current_metrics: object with ebitda, revenue, net_income, total_assets, book_value as numbers
- valuation_multiples: object with ebitda_multiple_range, revenue_multiple_range, book_value_multiple_range
- valuation_estimates: object with different valuation approaches as numbers
- industry_context: object with industry name, market conditions, growth stage, competitive position, market size
- valuation_factors: object with positive_factors and negative_factors arrays
- value_enhancement_opportunities: array of opportunity objects with impact, timeframe, difficulty, priority, investment, ROI
- market_comparables: array of comparable transaction objects
- insights: array of insight objects with type, priority, insight text, action recommended, impact on value
- summary: object with valuation range, key drivers, immediate actions, methodology notes

IMPORTANT: Return ONLY a valid JSON string that can be parsed with JSON.parse(). Do not include any markdown formatting, code blocks, or additional text.
Focus on realistic valuation ranges and actionable value enhancement opportunities.
Provide 3-5 positive and negative factors, 2-4 enhancement opportunities, and 2-4 market comparables.
All monetary amounts should be whole numbers without currency symbols.
Include specific multiple adjustments (e.g., "+1.0x to +2.0x") for valuation factors.

Example response format:
{"current_metrics":{"ebitda":60000,"revenue":500000,...},"valuation_multiples":{...},...}
`;export{t as valuationToolPrompt};
