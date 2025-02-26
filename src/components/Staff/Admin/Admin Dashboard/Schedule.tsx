"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Avatar from '@/assets/avatars/3d_avatar_3.png';

interface Event {
  title: string;
  date: string;
  timeRange: string;
  participants: number;
  color: string;
}

const Schedule = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const events: Event[] = [
    {
      title: "Parents, Teacher Meet Day",
      date: "07 Jan 2025",
      timeRange: "09:10 AM - 10:50 PM",
      participants: 2,
      color: "bg-red-500"
    },
    {
      title: "Teachers Training",
      date: "15 Feb 2025",
      timeRange: "09:10 AM - 11:15 PM",
      participants: 3,
      color: "bg-green-500"
    },
    {
      title: "Vacation",
      date: "07 Mar 2025 - 09 Mar 2025",
      timeRange: "10:10 AM",
      participants: 3,
      color: "bg-blue-400"
    }
  ];

  const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    
    const days = [];
    
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startingDay - 1; i >= 0; i--) {
      days.push({
        date: prevMonthLastDay - i,
        isCurrentMonth: false
      });
    }
    
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        date: i,
        isCurrentMonth: true
      });
    }
    
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: i,
        isCurrentMonth: false
      });
    }
    
    return days;
  };

  const formatMonth = (date: Date) => {
    return date.toLocaleString('default', { month: 'long', year: 'numeric' });
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const handleDateClick = (date: number, isCurrentMonth: boolean) => {
    if (isCurrentMonth) {
      const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), date);
      console.log('Selected date:', newDate);
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold text-gray-900">Schedules</h2>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
          Add New
        </button>
      </div>
      <div className="border-b border-gray-200 -mx-6 mb-4"></div>

      {/* Calendar Section - Kept Original */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm font-medium text-gray-900">
            {formatMonth(currentDate)}
          </span>
          <div className="flex space-x-2">
            <button 
              className="p-2 hover:bg-gray-100 rounded-full"
              onClick={handlePrevMonth}
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button 
              className="p-2 hover:bg-gray-100 rounded-full"
              onClick={handleNextMonth}
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-y-2">
          {weekDays.map((day) => (
            <div
              key={day}
              className="text-xs font-medium text-gray-500 text-center mb-2"
            >
              {day}
            </div>
          ))}
          
          {getDaysInMonth(currentDate).map((day, index) => (
            <div
              key={index}
              onClick={() => handleDateClick(day.date, day.isCurrentMonth)}
              className={`
                relative text-sm p-2 text-center
                ${!day.isCurrentMonth ? 'text-gray-400' : 'text-gray-900'}
                ${day.date === new Date().getDate() && 
                  day.isCurrentMonth && 
                  currentDate.getMonth() === new Date().getMonth() && 
                  currentDate.getFullYear() === new Date().getFullYear()
                    ? 'bg-blue-600 text-white rounded-lg' 
                    : ''}
                hover:bg-gray-50 cursor-pointer
              `}
            >
              <span className="relative z-10">{day.date}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events Section - Adjusted */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Upcoming Events</h3>
        <div className="space-y-6">
          {events.map((event, index) => (
            <div key={index} className="flex gap-4">
              <div className={`w-1 ${event.color} rounded-full`} />
              <div className="flex-1">
                <div className="bg-gray-50 rounded-lg py-5 px-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-1">
                    {event.title}
                  </h4>
                  <p className="text-xs text-gray-500 mb-3">
                    {event.date}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {event.timeRange}
                    </span>
                    <div className="flex -space-x-2">
                      {[...Array(event.participants)].map((_, i) => (
                        <img
                          key={i}
                          src={Avatar.src}
                          alt={`Participant ${i + 1}`}
                          className="w-8 h-8 rounded-full border-2 border-white object-cover"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;