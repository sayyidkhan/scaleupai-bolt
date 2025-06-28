import React from "react";
import { Sparkles, TrendingUp, TrendingDown, Clock } from "lucide-react";

export function AIAnalysis(): JSX.Element {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center mb-6">
        <div className="p-3 bg-purple-100 rounded-lg mr-3">
          <Sparkles className="w-5 h-5 text-purple-700" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900">AI Analysis & Trends Summary</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-emerald-800 mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 mr-2" />
            Positive Trends
          </h3>
          <div className="space-y-3">
            <div className="flex items-start p-4 bg-emerald-50 rounded-lg border border-emerald-200">
              <TrendingUp className="w-4 h-4 text-emerald-700 mr-2 mt-1 flex-shrink-0" />
              <p className="text-gray-800">Food quality ratings improved by 0.4 points, with "fresh" and "delicious" mentions up 23%</p>
            </div>
            <div className="flex items-start p-4 bg-emerald-50 rounded-lg border border-emerald-200">
              <TrendingUp className="w-4 h-4 text-emerald-700 mr-2 mt-1 flex-shrink-0" />
              <p className="text-gray-800">Ambience scores consistently high across all platforms, "cozy" mentions increased 18%</p>
            </div>
            <div className="flex items-start p-4 bg-emerald-50 rounded-lg border border-emerald-200">
              <TrendingUp className="w-4 h-4 text-emerald-700 mr-2 mt-1 flex-shrink-0" />
              <p className="text-gray-800">Weekend dinner service showing improvement with faster table turnover</p>
            </div>
            <div className="flex items-start p-4 bg-emerald-50 rounded-lg border border-emerald-200">
              <TrendingUp className="w-4 h-4 text-emerald-700 mr-2 mt-1 flex-shrink-0" />
              <p className="text-gray-800">Positive menu mentions increased 8% with signature dishes receiving praise</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center">
            <TrendingDown className="w-5 h-5 mr-2" />
            Areas for Improvement
          </h3>
          <div className="space-y-3">
            <div className="flex items-start p-4 bg-red-50 rounded-lg border border-red-200">
              <TrendingDown className="w-4 h-4 text-red-700 mr-2 mt-1 flex-shrink-0" />
              <p className="text-gray-800">Service speed during peak hours (7-9 PM) receiving more "slow" mentions, up 15%</p>
            </div>
            <div className="flex items-start p-4 bg-red-50 rounded-lg border border-red-200">
              <TrendingDown className="w-4 h-4 text-red-700 mr-2 mt-1 flex-shrink-0" />
              <p className="text-gray-800">Value perception declining with "expensive" mentions increasing 12%</p>
            </div>
            <div className="flex items-start p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <Clock className="w-4 h-4 text-yellow-700 mr-2 mt-1 flex-shrink-0" />
              <p className="text-gray-800">Temperature complaints for certain dishes mentioned in 8% of recent reviews</p>
            </div>
            <div className="flex items-start p-4 bg-red-50 rounded-lg border border-red-200">
              <TrendingDown className="w-4 h-4 text-red-700 mr-2 mt-1 flex-shrink-0" />
              <p className="text-gray-800">Negative menu mentions decreased 15% but focus needed on portion sizes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
