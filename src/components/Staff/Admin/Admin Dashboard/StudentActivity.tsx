import React from 'react';
import Image from 'next/image';
import Avatar from '@/assets/avatars/ne.png';

interface ActivityProps {
  timeFrame: string;
}

interface ActivityItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

const StudentActivity: React.FC<ActivityProps> = ({ timeFrame = "This Month" }) => {
  // Sample data to match the image
  const activities: ActivityItem[] = [
    {
      id: 1,
      title: "1st place in \"Chess\"",
      subtitle: "This event took place in Our School",
      image: Avatar.src
    },
    {
      id: 2,
      title: "Participated in \"Debate\"",
      subtitle: "Zaan participated in \"debate\"",
      image: Avatar.src
    },
    {
      id: 3,
      title: "1st place in \"100M\"",
      subtitle: "This event took place in Our School",
      image: Avatar.src
    },
    {
      id: 4,
      title: "International conference",
      subtitle: "We attended international conference",
      image: Avatar.src
    }
  ];

  return (
    <div className="w-full max-w-lg border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">Student Activity</h2>
        <div className="flex items-center space-x-1 text-gray-700">
          <span className="text-sm">{timeFrame}</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      
      <div className="divide-y divide-gray-100">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center p-4">
            <div className="flex-shrink-0 h-12 w-12 rounded-md overflow-hidden mr-4">
              {/* Using position relative on parent div to properly position the image */}
              <div className="relative h-full w-full">
                <Image 
                  src={activity.image} 
                  alt="Student" 
                  layout="fill" 
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-800">{activity.title}</p>
              <p className="text-xs text-gray-500">{activity.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentActivity;