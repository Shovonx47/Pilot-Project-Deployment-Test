import React from 'react';

interface MetricCardProps {
  title: string;
  amount: string;
  percentChange: number;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, amount, percentChange }) => {
  // Determine color based on percentage change
  const getBgColor = (change: number): string => {
    if (change > 0) return 'bg-green-100';
    if (change < 0) return 'bg-red-100';
    return 'bg-blue-100';
  };
  
  const getTextColor = (change: number): string => {
    if (change > 0) return 'text-green-600';
    if (change < 0) return 'text-red-600';
    return 'text-blue-600';
  };
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-3 mb-2">
      <div className="flex justify-between items-center">
        <div className="pb-4">
          <p className="text-gray-500 text-xs mb-0">{title}</p>
          <p className="text-black text-lg font-medium">{amount}</p>
        </div>
        <span
          className={`${getBgColor(percentChange)} ${getTextColor(percentChange)} text-xs px-2 py-0.5 rounded-md`}
        >
          {Math.abs(percentChange)}%
        </span>
      </div>
    </div>
  );
};

const FinancialMetricsCards: React.FC = () => {
  const metricsData = [
    {
      title: 'Total Fees Collected',
      amount: '$25,000.02',
      percentChange: 1.2,
    },
    {
      title: 'Fine Collected till date',
      amount: '$4,56.64',
      percentChange: -1.2,
    },
    {
      title: 'Student Not Paid',
      amount: '$545',
      percentChange: 1.2,
    },
    {
      title: 'Total Outstanding',
      amount: '$4,56.64',
      percentChange: -1.2,
    },
  ];
  
  return (
    <div className="max-w-md mx-auto">
      {metricsData.map((metric, index) => (
        <MetricCard
          key={index}
          title={metric.title}
          amount={metric.amount}
          percentChange={metric.percentChange}
        />
      ))}
    </div>
  );
};

export default FinancialMetricsCards;