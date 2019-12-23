import React from "react";
import { colorToClass } from "../../lib/color";

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
