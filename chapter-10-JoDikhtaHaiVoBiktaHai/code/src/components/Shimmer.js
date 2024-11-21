import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(15)
        .fill("")
        .map((item, index) => (
          <div key={index} className="w-[200px] h-[200px] bg-slate-500 m-5"></div>
        ))}
    </div>
  );
};

export default Shimmer;
