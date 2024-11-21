import React from "react";

const Shimmer = () => {
  return (
    <div className="Body">
      {Array(15)
        .fill("")
        .map((item, index) => (
          <div key={index} className="shimmer-card"></div>
        ))}
    </div>
  );
};

export default Shimmer;
