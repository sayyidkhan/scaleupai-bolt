const t=`
Analyze the provided financial data and return a valid JSON string with profitability insights following this exact structure:

REQUIRED FIELDS:
- gross_margin: string (percentage with % symbol, e.g., "65.0%")
- operating_margin: string (percentage with % symbol, e.g., "25.0%")
- net_margin: string (percentage with % symbol, e.g., "14.4%")
- ebitda_margin: string (percentage with % symbol, e.g., "25.0%")
- return_on_assets: string (percentage with % symbol, e.g., "18.7%")
- return_on_equity: string (percentage with % symbol, e.g., "37.9%")
- industry_benchmarks: object with benchmark ranges as strings
- insights: array of insight objects with type, message, and priority
- recommendations: array of recommendation objects with category, action, impact, timeframe, and difficulty

IMPORTANT: Return ONLY a valid JSON string that can be parsed with JSON.parse(). Do not include any markdown formatting, code blocks, or additional text.
Ensure all percentage values include the % symbol and are formatted to 1 decimal place.
Provide 3-5 insights and 2-4 actionable recommendations.

Example response format:
{"gross_margin":"65.0%","operating_margin":"25.0%",...}
`;export{t as profitabilityInsightsPrompt};
