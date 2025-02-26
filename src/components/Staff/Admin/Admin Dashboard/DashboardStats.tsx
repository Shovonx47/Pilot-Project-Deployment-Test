"use client";
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const DashboardStats = () => {
  const [currentPerformer, setCurrentPerformer] = React.useState(0);
  const [currentStudent, setCurrentStudent] = React.useState(0);
  
  const performers = [
    { name: 'Rasel', role: 'Mathematics Teacher' },
    // Add more performers as needed
  ];
  
  const students = [
    { name: 'Zaan', grade: 'XII, A' },
    // Add more students as needed
  ];

  return (
    <div className="w-full max-w-6xl p-6">
      {/* Stats Section */}
      <div className="space-y-6 mb-6">
        {/* Earnings Card */}
        <div className="bg-white rounded-lg p-6 shadow">
          <div className="mb-4">
            <div className="text-gray-600 text-sm font-medium mb-2">Total Earnings</div>
            <div className="text-3xl font-bold">$64,522.24</div>
          </div>
          <div className="h-40 relative">
            {/* Blue gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent"></div>
            
            {/* Chart area */}
            <div className="absolute inset-0">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 160">
                <defs>
                  <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 100 L50 60 L100 120 L150 40 L200 80 L250 60 L300 90 L350 70 L400 90 L400 160 L0 160 Z"
                  fill="url(#blueGradient)"
                />
                <path
                  d="M0 100 L50 60 L100 120 L150 40 L200 80 L250 60 L300 90 L350 70 L400 90"
                  fill="none"
                  stroke="rgb(59, 130, 246)"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Expenses Card */}
        <div className="bg-white rounded-lg p-6 shadow">
          <div className="mb-4">
            <div className="text-gray-600 text-sm font-medium mb-2">Total Expenses</div>
            <div className="text-3xl font-bold">$60,522.24</div>
          </div>
          <div className="h-40 relative">
            {/* Red gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-red-50/50 to-transparent"></div>
            
            {/* Chart area */}
            <div className="absolute inset-0">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 160">
                <defs>
                  <linearGradient id="redGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgb(239, 68, 68)" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="rgb(239, 68, 68)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 80 L50 100 L100 60 L150 110 L200 70 L250 90 L300 60 L350 80 L400 70 L400 160 L0 160 Z"
                  fill="url(#redGradient)"
                />
                <path
                  d="M0 80 L50 100 L100 60 L150 110 L200 70 L250 90 L300 60 L350 80 L400 70"
                  fill="none"
                  stroke="rgb(239, 68, 68)"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Cards Row */}
      <div className="flex flex-row space-x-6">
        {/* Best Performer Card */}
        <div className="flex-1 bg-green-500 rounded-lg p-6 h-64 flex flex-col items-center justify-between">
          <div className="text-center text-white">
            <div className="text-sm opacity-90 mb-2">Best Performer</div>
            <div className="text-xl font-semibold mb-1">{performers[currentPerformer].name}</div>
            <div className="text-sm opacity-90">{performers[currentPerformer].role}</div>
          </div>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => setCurrentPerformer(prev => (prev > 0 ? prev - 1 : performers.length - 1))}
              className="p-1 rounded-full bg-white/20 hover:bg-white/30"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button 
              onClick={() => setCurrentPerformer(prev => (prev < performers.length - 1 ? prev + 1 : 0))}
              className="p-1 rounded-full bg-white/20 hover:bg-white/30"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Star Students Card */}
        <div className="flex-1 bg-blue-600 rounded-lg p-6 h-64 flex flex-col items-center justify-between">
          <div className="text-center text-white">
            <div className="text-sm opacity-90 mb-2">Star Students</div>
            <div className="text-xl font-semibold mb-1">{students[currentStudent].name}</div>
            <div className="text-sm opacity-90">{students[currentStudent].grade}</div>
          </div>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => setCurrentStudent(prev => (prev > 0 ? prev - 1 : students.length - 1))}
              className="p-1 rounded-full bg-white/20 hover:bg-white/30"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button 
              onClick={() => setCurrentStudent(prev => (prev < students.length - 1 ? prev + 1 : 0))}
              className="p-1 rounded-full bg-white/20 hover:bg-white/30"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;