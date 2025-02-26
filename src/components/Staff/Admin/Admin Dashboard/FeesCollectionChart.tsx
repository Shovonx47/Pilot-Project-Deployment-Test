import React, { useEffect, useRef } from 'react';

const FeesCollectionChart = () => {
  // Sample data - you would replace this with your actual data
  const data = [
    { quarter: 'Q1: 2024', collected: 30, total: 70 },
    { quarter: 'Q2: 2024', collected: 40, total: 90 },
    { quarter: 'Q3: 2024', collected: 38, total: 85 },
    { quarter: 'Q4: 2024', collected: 40, total: 88 },
    { quarter: 'Q1: 2025', collected: 38, total: 85 },
    { quarter: 'Q2: 2025', collected: 30, total: 65 },
    { quarter: 'Q3: 2025', collected: 35, total: 70 },
    { quarter: 'Q4: 2025', collected: 38, total: 88 },
    { quarter: 'Q1: 2026', collected: 40, total: 95 }
  ];

  const maxValue = 100; // Y-axis max value
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 w-full">
      <div className="flex justify-between items-center mb-6">
        <div className="text-lg font-medium text-gray-800">Fees Collection</div>
        <div className="flex items-center">
          <span className="text-sm text-gray-600 mr-2">Last 9 Quarter</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      
      <div className="h-64 relative">
        {/* Y-axis labels */}
        <div className="absolute left-2 top-0 h-full flex flex-col justify-between text-xs text-gray-600">
          <div>100</div>
          <div>50</div>
          <div>0</div>
        </div>
        
        {/* Horizontal grid lines */}
        <div className="absolute left-10 right-0 top-0 h-full">
          <div className="border-t border-gray-200 h-1/2"></div>
          <div className="border-t border-gray-200 h-1/2"></div>
        </div>
        
        {/* Chart bars */}
        <div className="absolute left-10 right-0 top-6 bottom-8 flex justify-between">
          {data.map((item, index) => {
            const totalHeight = (item.total / maxValue) * 100;
            const collectedHeight = (item.collected / maxValue) * 100;
            
            return (
              <div key={index} className="flex flex-col justify-end relative w-8">
                <div 
                  className="bg-gray-200 w-full rounded-t-sm" 
                  style={{ height: `${totalHeight}%` }}
                ></div>
                <div 
                  className="bg-blue-600 w-full rounded-t-sm absolute bottom-0" 
                  style={{ height: `${collectedHeight}%` }}
                ></div>
              </div>
            );
          })}
        </div>
        
        {/* X-axis labels */}
        <div className="absolute left-10 right-0 bottom-0 flex justify-between text-xs text-gray-600">
          {data.map((item, index) => (
            <div key={index} className="w-12 text-center overflow-hidden whitespace-nowrap">{item.quarter}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeesCollectionChart;