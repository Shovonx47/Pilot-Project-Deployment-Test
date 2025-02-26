"use client";
import { useState } from 'react';

interface NavItem {
  color: string;
  label: string;
}

const NavMenu = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const navItems: NavItem[] = [
    { color: 'bg-[#EAB300]', label: 'View Attendance' },
    { color: 'bg-[#00A76F]', label: 'New Events' },
    { color: 'bg-[#E82646]', label: 'Membership Plans' },
    { color: 'bg-[#6FCCD8]', label: 'Finance & Accounts' },
  ];

  return (
    <div className="pt-4 pb-4">
      <nav className="flex flex-row gap-3 w-full">
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`
              relative flex items-center flex-1
              h-16 min-w-[200px]
              bg-[#E9F9E8] rounded-lg shadow-lg
              transition-all duration-300 hover:brightness-105
              ${activeTab === index ? 'ring-2 ring-white' : ''}
            `}
          >
            <div className={`absolute left-4 w-8 h-8 ${item.color} rounded`} />
            <span className="text-black text-sm ml-16">{item.label}</span>
            <div className="absolute right-4 w-3 h-3 bg-white rounded-full" />
          </button>
        ))}
      </nav>
    </div>
  );
};

export default NavMenu;