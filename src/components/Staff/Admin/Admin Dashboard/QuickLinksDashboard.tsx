import React from 'react';

interface QuickLinkProps {
  title: string;
  bgColor: string;
}

const QuickLink: React.FC<QuickLinkProps> = ({ title, bgColor }) => (
  <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center justify-center space-y-2">
    <div className="relative w-12 h-12">
      <div className={`absolute inset-0 ${bgColor} rounded-full`}></div>
      <div className="absolute inset-0 border-4 border-white rounded-full"></div>
    </div>
    <span className="text-gray-700 text-xs w-full text-center whitespace-nowrap overflow-hidden">
      {title}
    </span>
  </div>
);

const QuickLinksDashboard = () => {
  const links = [
    { title: 'Calendar', bgColor: 'bg-green-500' },
    { title: 'Exam Result', bgColor: 'bg-blue-500' },
    { title: 'Attendance', bgColor: 'bg-yellow-500' },
    { title: 'Fees', bgColor: 'bg-cyan-400' },
    { title: 'Home Works', bgColor: 'bg-red-500' },
    { title: 'Reports', bgColor: 'bg-blue-400' }
  ];
  
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <h2 className="text-lg font-medium text-gray-800 mb-4">Quick Links</h2>
      <div className="grid grid-cols-3 gap-4">
        {links.map((link, index) => (
          <QuickLink 
            key={index}
            title={link.title}
            bgColor={link.bgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default QuickLinksDashboard;