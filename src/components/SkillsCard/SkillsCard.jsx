import React from 'react';

function SkillsCard({ skillsImg, skillsHead, skillsText }) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg w-full max-w-sm shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out mx-auto">
      {/* Chrome window UI */}
      <div className="flex justify-between items-center bg-gray-800 p-3 rounded-t-lg">
        {/* Chrome buttons */}
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        {/* Placeholder for a URL or title */}
        <div className="flex-grow mx-4 bg-gray-700 h-4 rounded-md"></div>
      </div>

      {/* Image Section */}
      <div className="bg-gray-700 flex justify-center p-6 md:p-8 rounded-t-lg">
        {/* Insert Image Here */}
        {skillsImg}
      </div>

      {/* Text Section */}
      <div className="text-white p-6">
        <h2 className="text-xl md:text-2xl font-semibold">{skillsHead}</h2>
        <p className="mt-4 text-sm md:text-base">
          {skillsText}
        </p>
      </div>
    </div>
  );
}

export default SkillsCard;
