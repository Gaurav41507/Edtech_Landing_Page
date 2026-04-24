import React from "react";

const bgColors = {
  green: "bg-[#319F43]",
  purple: "bg-[#9747FF]",
  blue: "bg-[#1877F2]",
  orange: "bg-[#F45E29]",
};

function PlatformBadge({ platform }) {
  const colorClass =
    platform === "Instagram"
      ? "bg-gradient-to-r from-pink-500 via-yellow-500 to-orange-600 text-white"
      : platform === "Facebook"
      ? "bg-[#1877F2] text-white"
      : platform === "LinkedIn"
      ? "bg-[#0A66C2] text-white"
      : "bg-gray-800 text-white";
  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium inline-block ${colorClass} ml-1`}
      style={{ fontWeight: 500 }}
    >
      {platform}
    </span>
  );
}

function TrustedLearnerCard({
  color,
  profileImage,
  name,
  stars,
  level,
  testimonial,
  company,
  platform,
}) {
  return (
    <div
      className={`w-full max-w-[430px] rounded-[12px] shadow-lg px-5 py-5 border-[3px] border-white ${bgColors[color]} text-white mx-auto flex flex-col`}
      style={{ minHeight: "285px", boxSizing: "border-box" }}
    >

      {/* Header row: name & image */}
      <div className="flex items-center mb-2">
      <span className="font-bold text-xl mr-5">{name}</span>
        
        <img
  src={profileImage}
  alt={name}
  className="
    rounded-full 
    shadow-md 
    w-16 h-16 sm:w-22 sm:h-22
    ml-auto 
    border-4 
    border-transparent 
    bg-gradient-to-r from-orange-500 via-purple-700 to-purple-900 
    p-[3px]
  "
  style={{
    backgroundClip: 'padding-box, border-box',
    
  }}
/>
      </div>

      {/* Stars */}
      <div className="flex items-center space-x-1 mb-2 text-yellow-300">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${i < stars ? "" : "opacity-40"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <polygon points="10,1.5 12.4,7.5 18.9,7.6 13.8,11.7 15.9,17.7 10,14.1 4.1,17.7 6.2,11.7 1.1,7.6 7.6,7.5" />
            </svg>
          ))}
      </div>

      {/* Degree/Level */}
      <div className="
  bg-white 
  text-[#F84646] 
  font-semibold 
  rounded-full 
  mb-3 
  flex
  items-center
  justify-center
  w-[12.375rem]  
  h-[2rem]       
  px-[0.625rem]    
  text-xs
  leading-none
  text-center
  break-words
">
        {level}
      </div>

      {/* Testimonial */}
      <div className="text-white text-sm mb-3 leading-relaxed font-medium">
        "{testimonial}"
      </div>

      {/* Company/Latest Role */}
      <div className="font-semibold text-sm mb-2">{company}</div>

      {/* Platform pill, always full width and rounded for mobile */}
      <div className="w-full">
        <span className="bg-white text-[#1877F2] rounded-xl px-3 py-2 text-sm font-normal inline-block whitespace-normal">
          I discovered this Learning platform via
          <span className="ml-1"><PlatformBadge platform={platform} /></span>
        </span>
      </div>
    </div>
  );
}

export default TrustedLearnerCard;
