import React from 'react';

const StudyHeatmap = () => {
  // Mock some activity data for visual effect (heavily weighted towards recent days)
  const getActivityLevel = (dayIndex) => {
    if (dayIndex > 330) return Math.random() > 0.2 ? Math.floor(Math.random() * 4) + 1 : 0;
    if (dayIndex > 200) return Math.random() > 0.6 ? Math.floor(Math.random() * 3) + 1 : 0;
    return Math.random() > 0.8 ? 1 : 0;
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 overflow-hidden">
      <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>
        Study Consistency
      </h3>
      
      {/* Scrollable container for smaller screens */}
      <div className="overflow-x-auto pb-2 scrollbar-thin">
        <div className="flex gap-1 min-w-max">
          {Array.from({ length: 52 }).map((_, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-1">
              {Array.from({ length: 7 }).map((_, rowIndex) => {
                const dayIndex = colIndex * 7 + rowIndex;
                if (dayIndex >= 365) return null;
                
                const level = getActivityLevel(dayIndex);
                const colors = [
                  'bg-gray-100', // 0
                  'bg-emerald-200', // 1
                  'bg-emerald-300', // 2
                  'bg-emerald-400', // 3
                  'bg-emerald-500'  // 4
                ];
                
                return (
                  <div 
                    key={rowIndex} 
                    className={`w-3 h-3 rounded-sm ${colors[level]} hover:ring-2 hover:ring-indigo-400 transition-all cursor-pointer`}
                    title="Activity"
                  ></div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-3 flex justify-end items-center text-xs text-gray-500 gap-2">
        <span>Less</span>
        <div className="flex gap-1">
          <div className="w-3 h-3 rounded-sm bg-gray-100"></div>
          <div className="w-3 h-3 rounded-sm bg-emerald-200"></div>
          <div className="w-3 h-3 rounded-sm bg-emerald-300"></div>
          <div className="w-3 h-3 rounded-sm bg-emerald-400"></div>
          <div className="w-3 h-3 rounded-sm bg-emerald-500"></div>
        </div>
        <span>More</span>
      </div>
    </div>
  );
};

export default StudyHeatmap;
