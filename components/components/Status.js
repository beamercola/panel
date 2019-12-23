import React from "react";

function colorToClass(color) {
  switch (color) {
    case "green":
      return "bg-green-400";
      break;
  }
}

const Status = ({ color }) => {
  return (
    <div className="text-right">
      <div
        className={`rounded-full h-4 w-4 inline-block ${colorToClass(color)}`}
      ></div>
    </div>
  );
};

export default Status;
