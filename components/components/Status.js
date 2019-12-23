import React from "react";

const Status = ({ color }) => {
  var bg;
  switch (color) {
    case "green":
      bg = "bg-green-400";
      break;
  }

  return (
    <div className="text-right">
      <div className={`rounded-full h-4 w-4 inline-block ${bg}`}></div>
    </div>
  );
};

export default Status;
