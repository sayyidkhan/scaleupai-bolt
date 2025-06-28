import React from "react";
import { TrendingUp, Target, Zap } from "lucide-react";

interface SensitivityAnalysisData {
  scenarios?: Array<{
    name: string;
    revenueImpact: number;
    profitImpact: number;
    cashFlowImpact: number;
    difficulty: string;
    timeframe: string;
  }>;
}

interface SensitivityAnalysisProps {
  mockFinancialData?: {
    revenue: number;
    cogs: number;
    operatingExpenses: number;
    accountsReceivable: number;
    inventory: number;
    accountsPayable: number;
    accountsReceivableDays: number;
    inventoryDays: number;
    accountsPayableDays: number;
  };
  apiData?: SensitivityAnalysisData;
  formatCurrency: (amount: number) => string;
}

const SensitivityAnalysis: React.FC<SensitivityAnalysisProps> = ({ mockFinancialData, formatCurrency }) => {
  // Provide default values if mockFinancialData is undefined
  const financialData = mockFinancialData || {
    revenue: 0,
    cogs: 0,
    operatingExpenses: 0,
    accountsReceivable: 0,
    inventory: 0,
    accountsPayable: 0,
    accountsReceivableDays: 0,
    inventoryDays: 0,
    accountsPayableDays: 0,
  };

  // Enhanced Sensitivity Analysis with different impacts
  const sensitivityAnalysis = {
    priceIncrease1Percent: {
      revenueImpact: financialData.revenue * 0.01,
      profitImpact: financialData.revenue * 0.01, // 100% flows to profit (highest impact)
      cashFlowImpact: financialData.revenue * 0.01 * 0.85, // 85% after taxes
      priority: 1,
      difficulty: "Medium",
      timeframe: "1-3 months",
    },
    volumeIncrease1Percent: {
      revenueImpact: financialData.revenue * 0.01,
      profitImpact: financialData.revenue * 0.01 - financialData.cogs * 0.01, // Revenue minus variable costs
      cashFlowImpact: (financialData.revenue * 0.01 - financialData.cogs * 0.01) * 0.85,
      priority: 4,
      difficulty: "Hard",
      timeframe: "3-6 months",
    },
    cogsDecrease1Percent: {
      revenueImpact: 0,
      profitImpact: financialData.cogs * 0.01, // Direct cost savings
      cashFlowImpact: financialData.cogs * 0.01 * 0.85,
      priority: 2,
      difficulty: "Medium",
      timeframe: "1-2 months",
    },
    opexDecrease1Percent: {
      revenueImpact: 0,
      profitImpact: financialData.operatingExpenses * 0.01, // Direct expense reduction
      cashFlowImpact: financialData.operatingExpenses * 0.01 * 0.85,
      priority: 3,
      difficulty: "Easy",
      timeframe: "Immediate",
    },
    arDecrease1Day: {
      revenueImpact: 0,
      profitImpact: 0, // No profit impact, only cash flow
      cashFlowImpact: financialData.accountsReceivable / financialData.accountsReceivableDays,
      priority: 6,
      difficulty: "Medium",
      timeframe: "1-2 months",
    },
    inventoryDecrease1Day: {
      revenueImpact: 0,
      profitImpact: 0, // No profit impact, only cash flow
      cashFlowImpact: financialData.inventory / financialData.inventoryDays,
      priority: 5,
      difficulty: "Medium",
      timeframe: "2-4 months",
    },
    apIncrease1Day: {
      revenueImpact: 0,
      profitImpact: 0, // No profit impact, only cash flow
      cashFlowImpact: financialData.accountsPayable / financialData.accountsPayableDays,
      priority: 7,
      difficulty: "Easy",
      timeframe: "Immediate",
    },
  };

  // Get top 3 opportunities by profit impact
  const topProfitOpportunities = [
    { name: "1% Price Increase", ...sensitivityAnalysis.priceIncrease1Percent },
    { name: "1% COGS Decrease", ...sensitivityAnalysis.cogsDecrease1Percent },
    { name: "1% Operating Expenses Decrease", ...sensitivityAnalysis.opexDecrease1Percent },
  ].sort((a, b) => b.profitImpact - a.profitImpact);

  // Get top 3 opportunities by cash flow impact
  const topCashFlowOpportunities = [
    { name: "1% Price Increase", ...sensitivityAnalysis.priceIncrease1Percent },
    { name: "1% COGS Decrease", ...sensitivityAnalysis.cogsDecrease1Percent },
    { name: "1% Operating Expenses Decrease", ...sensitivityAnalysis.opexDecrease1Percent },
  ].sort((a, b) => b.cashFlowImpact - a.cashFlowImpact);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Impact Analysis on Cash Flow & Profit</h3>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-900">Scenario</th>
                <th className="text-center py-3 px-4 font-medium text-gray-900">Revenue Impact</th>
                <th className="text-center py-3 px-4 font-medium text-gray-900">Profit Impact</th>
                <th className="text-center py-3 px-4 font-medium text-gray-900">Cash Flow Impact</th>
                <th className="text-center py-3 px-4 font-medium text-gray-900">Difficulty</th>
                <th className="text-center py-3 px-4 font-medium text-gray-900">Timeframe</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="py-3 px-4 font-medium text-gray-900">1% Price Increase</td>
                <td className="py-3 px-4 text-center text-green-600 font-semibold">+{formatCurrency(sensitivityAnalysis.priceIncrease1Percent.revenueImpact)}</td>
                <td className="py-3 px-4 text-center text-green-600 font-semibold">+{formatCurrency(sensitivityAnalysis.priceIncrease1Percent.profitImpact)}</td>
                <td className="py-3 px-4 text-center text-green-600 font-semibold">+{formatCurrency(sensitivityAnalysis.priceIncrease1Percent.cashFlowImpact)}</td>
                <td className="py-3 px-4 text-center">
                  <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">{sensitivityAnalysis.priceIncrease1Percent.difficulty}</span>
                </td>
                <td className="py-3 px-4 text-center text-sm text-gray-600">{sensitivityAnalysis.priceIncrease1Percent.timeframe}</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-gray-900">1% Volume Increase</td>
                <td className="py-3 px-4 text-center text-green-600 font-semibold">+{formatCurrency(sensitivityAnalysis.volumeIncrease1Percent.revenueImpact)}</td>
                <td className="py-3 px-4 text-center text-green-600 font-semibold">+{formatCurrency(sensitivityAnalysis.volumeIncrease1Percent.profitImpact)}</td>
                <td className="py-3 px-4 text-center text-green-600 font-semibold">+{formatCurrency(sensitivityAnalysis.volumeIncrease1Percent.cashFlowImpact)}</td>
                <td className="py-3 px-4 text-center">
                  <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">{sensitivityAnalysis.volumeIncrease1Percent.difficulty}</span>
                </td>
                <td className="py-3 px-4 text-center text-sm text-gray-600">{sensitivityAnalysis.volumeIncrease1Percent.timeframe}</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-gray-900">1% COGS Decrease</td>
                <td className="py-3 px-4 text-center text-gray-500">-</td>
                <td className="py-3 px-4 text-center text-green-600 font-semibold">+{formatCurrency(sensitivityAnalysis.cogsDecrease1Percent.profitImpact)}</td>
                <td className="py-3 px-4 text-center text-green-600 font-semibold">+{formatCurrency(sensitivityAnalysis.cogsDecrease1Percent.cashFlowImpact)}</td>
                <td className="py-3 px-4 text-center">
                  <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">{sensitivityAnalysis.cogsDecrease1Percent.difficulty}</span>
                </td>
                <td className="py-3 px-4 text-center text-sm text-gray-600">{sensitivityAnalysis.cogsDecrease1Percent.timeframe}</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-gray-900">1% Operating Expenses Decrease</td>
                <td className="py-3 px-4 text-center text-gray-500">-</td>
                <td className="py-3 px-4 text-center text-green-600 font-semibold">+{formatCurrency(sensitivityAnalysis.opexDecrease1Percent.profitImpact)}</td>
                <td className="py-3 px-4 text-center text-green-600 font-semibold">+{formatCurrency(sensitivityAnalysis.opexDecrease1Percent.cashFlowImpact)}</td>
                <td className="py-3 px-4 text-center">
                  <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">{sensitivityAnalysis.opexDecrease1Percent.difficulty}</span>
                </td>
                <td className="py-3 px-4 text-center text-sm text-gray-600">{sensitivityAnalysis.opexDecrease1Percent.timeframe}</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-gray-900">1 Day AR Decrease</td>
                <td className="py-3 px-4 text-center text-gray-500">-</td>
                <td className="py-3 px-4 text-center text-gray-500">-</td>
                <td className="py-3 px-4 text-center text-blue-600 font-semibold">+{formatCurrency(sensitivityAnalysis.arDecrease1Day.cashFlowImpact)}</td>
                <td className="py-3 px-4 text-center">
                  <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">{sensitivityAnalysis.arDecrease1Day.difficulty}</span>
                </td>
                <td className="py-3 px-4 text-center text-sm text-gray-600">{sensitivityAnalysis.arDecrease1Day.timeframe}</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-gray-900">1 Day Inventory Decrease</td>
                <td className="py-3 px-4 text-center text-gray-500">-</td>
                <td className="py-3 px-4 text-center text-gray-500">-</td>
                <td className="py-3 px-4 text-center text-blue-600 font-semibold">+{formatCurrency(sensitivityAnalysis.inventoryDecrease1Day.cashFlowImpact)}</td>
                <td className="py-3 px-4 text-center">
                  <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">{sensitivityAnalysis.inventoryDecrease1Day.difficulty}</span>
                </td>
                <td className="py-3 px-4 text-center text-sm text-gray-600">{sensitivityAnalysis.inventoryDecrease1Day.timeframe}</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-gray-900">1 Day AP Increase</td>
                <td className="py-3 px-4 text-center text-gray-500">-</td>
                <td className="py-3 px-4 text-center text-gray-500">-</td>
                <td className="py-3 px-4 text-center text-blue-600 font-semibold">+{formatCurrency(sensitivityAnalysis.apIncrease1Day.cashFlowImpact)}</td>
                <td className="py-3 px-4 text-center">
                  <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">{sensitivityAnalysis.apIncrease1Day.difficulty}</span>
                </td>
                <td className="py-3 px-4 text-center text-sm text-gray-600">{sensitivityAnalysis.apIncrease1Day.timeframe}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Highest Profit Impact Opportunities */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
            Highest Profit Impact Opportunities
          </h3>
          <div className="space-y-3">
            {topProfitOpportunities.map((opportunity, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">{index + 1}</div>
                  <div>
                    <span className="text-sm font-medium text-green-800">{opportunity.name}</span>
                    <div className="text-xs text-green-600">
                      {opportunity.difficulty} • {opportunity.timeframe}
                    </div>
                  </div>
                </div>
                <span className="text-sm font-bold text-green-600">+{formatCurrency(opportunity.profitImpact)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Highest Cash Flow Impact Opportunities */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Zap className="w-5 h-5 text-blue-600 mr-2" />
            Highest Cash Flow Impact Opportunities
          </h3>
          <div className="space-y-3">
            {topCashFlowOpportunities.map((opportunity, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">{index + 1}</div>
                  <div>
                    <span className="text-sm font-medium text-blue-800">{opportunity.name}</span>
                    <div className="text-xs text-blue-600">
                      {opportunity.difficulty} • {opportunity.timeframe}
                    </div>
                  </div>
                </div>
                <span className="text-sm font-bold text-blue-600">+{formatCurrency(opportunity.cashFlowImpact)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Implementation Priority Matrix */}
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Target className="w-5 h-5 text-purple-600 mr-2" />
          Implementation Priority Matrix
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">1</div>
              <h4 className="font-semibold text-green-800">Immediate Actions</h4>
            </div>
            <div className="space-y-2">
              <div className="text-sm text-green-700">• Review and optimize pricing strategy</div>
              <div className="text-sm text-green-700">• Reduce operating expenses</div>
              <div className="text-sm text-green-700">• Negotiate payment terms</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-4 rounded-lg border border-yellow-200">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">2</div>
              <h4 className="font-semibold text-yellow-800">Short-term (1-3 months)</h4>
            </div>
            <div className="space-y-2">
              <div className="text-sm text-yellow-700">• Optimize supplier relationships</div>
              <div className="text-sm text-yellow-700">• Improve collection processes</div>
              <div className="text-sm text-yellow-700">• Streamline inventory management</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">3</div>
              <h4 className="font-semibold text-blue-800">Long-term (3+ months)</h4>
            </div>
            <div className="space-y-2">
              <div className="text-sm text-blue-700">• Develop growth strategies</div>
              <div className="text-sm text-blue-700">• Invest in operational efficiency</div>
              <div className="text-sm text-blue-700">• Explore new revenue streams</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SensitivityAnalysis;
