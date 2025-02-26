import React from 'react';
import Avatar from '@/assets/avatars/Book.png';
import Avatar2 from '@/assets/avatars/ce.png';
import Avatar4 from '@/assets/avatars/pe.png';
import { StaticImageData } from 'next/image';

interface MetricCardProps {
  backgroundColor: string;
  count: number;
  label: string;
  activeCount: number;
  inactiveCount: number;
  percentageChange: number;
  imageType: string | StaticImageData;
  statusColor: string;
}

const MetricCard = ({ 
  backgroundColor, 
  count, 
  label, 
  activeCount, 
  inactiveCount, 
  percentageChange, 
  imageType,
  statusColor 
}: MetricCardProps) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm w-full">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div
            className="h-12 w-12 rounded-lg flex items-center justify-center"
            style={{ backgroundColor }}
          >
            <img
              src={typeof imageType === 'string' ? imageType : imageType.src}
              alt={label}
              className="w-8 h-8 object-contain"
            />
          </div>
          <div>
            <div className="text-2xl font-semibold">{count}</div>
            <div className="text-gray-500 text-xs">{label}</div>
          </div>
        </div>
        <div className={`px-2 py-1 rounded text-xs text-white ${statusColor}`}>
          {percentageChange}%
        </div>
      </div>
      <div className="flex items-center justify-between text-sm">
        <div>
          <span className="text-gray-500 text-xs">Active: </span>
          <span className="font-medium text-xs">{activeCount}</span>
        </div>
        <div>
          <span className="text-gray-500 text-xs">Inactive: </span>
          <span className="font-medium text-xs">{String(inactiveCount).padStart(2, '0')}</span>
        </div>
      </div>
    </div>
  );
};

const DashboardMetrics = () => {
  const metrics = [
    {
      backgroundColor: '#FDF2F8', // Light pink
      count: 5555,
      label: "Total Students",
      activeCount: 5550,
      inactiveCount: 5,
      percentageChange: 1.2,
      imageType: Avatar,
      statusColor: 'bg-[#E82646]'
    },
    {
      backgroundColor: '#FEF3C7', // Light yellow
      count: 300,
      label: "Total Teachers",
      activeCount: 250,
      inactiveCount: 50,
      percentageChange: 1.2,
      imageType: Avatar2,
      statusColor: 'bg-[#00FFFF]'
    },
    {
      backgroundColor: '#EFF6FF', // Light blue
      count: 172,
      label: "Total Staff",
      activeCount: 170,
      inactiveCount: 2,
      percentageChange: 1.2,
      imageType: Avatar4,
      statusColor: 'bg-[#EAB300]'
    },
    {
      backgroundColor: '#F5F3FF', // Light purple
      count: 72,
      label: "Total Subjects",
      activeCount: 70,
      inactiveCount: 1,
      percentageChange: 1.2,
      imageType: Avatar2,
      statusColor: 'bg-[#00AA00]'
    }
  ];

  return (
    <div className="w-full pt-4 bg-gray-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>
    </div>
  );
};

export default DashboardMetrics;