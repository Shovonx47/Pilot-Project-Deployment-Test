"use client";

const NoticeBoard = () => {
  const notices = [
    {
      title: "Exam Schedule Release",
      date: "05 Feb 2025",
      color: "bg-blue-200",
    },
    {
      title: "Follow Up - Exam Preparation !",
      date: "02 Feb 2025",
      color: "bg-red-200",
    },
    {
      title: "Updated Syllabus Instructions",
      date: "11 Jan 2025",
      color: "bg-red-200",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Notice Board</h2>
        <button className="text-gray-600 text-sm">View All</button>
      </div>

      <div className="relative mt-8">
        {/* Timeline line */}
        <div className="absolute left-2.5 top-0 h-full w-0.5 bg-gray-200" />

        {/* Notice items */}
        <div className="space-y-6">
          {notices.map((notice, index) => (
            <div key={index} className="flex items-start gap-4">
              {/* Timeline dot */}
              <div className="relative">
                <div className={`w-5 h-5 rounded-full ${notice.color} border-2 border-white ring-2 ring-gray-100`} />
              </div>

              {/* Content */}
              <div className="flex-1 bg-gray-50 rounded p-3">
                <h4 className="font-medium text-gray-900">{notice.title}</h4>
                <p className="text-sm text-gray-500 mt-1">Added on : {notice.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;