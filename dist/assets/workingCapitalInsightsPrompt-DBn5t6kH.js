const i=`
Analyze the provided financial data and return a valid JSON string with working capital insights following this exact structure:

REQUIRED FIELDS:
- working_capital: number (dollar amount, no currency symbol)
- current_ratio: string (decimal format, e.g., "2.33")
- quick_ratio: string (decimal format, e.g., "1.56")
- cash_conversion_cycle: number (days as integer)
- components: object with receivables, inventory, and payables days
- ideal_ranges: object with benchmark ranges as strings
- efficiency: object with ratio percentage, cash flow efficiency, and liquidity status
- optimization_opportunities: array of opportunity objects with area, performance descriptions, cash impact, priority, difficulty, and timeframe
- insights: array of insight objects with type, message, affected metric, and impact level

IMPORTANT: Return ONLY a valid JSON string that can be parsed with JSON.parse(). Do not include any markdown formatting, code blocks, or additional text.
Focus on actionable insights for cash flow optimization and working capital efficiency.
Provide 2-4 optimization opportunities and 3-5 key insights.
All monetary amounts should be whole numbers without currency symbols.

Example response format:
{"working_capital":60000,"current_ratio":"2.33",...}
`;export{i as workingCapitalInsightsPrompt};
