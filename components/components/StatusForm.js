import React from "react";
import { ContextMenu, MenuItem } from "react-contextmenu";
import { colors, colorToClass } from "../../lib/color";

const StatusForm = props => {
  const handleClick = color => {
    console.log(color);
  };

  return (
    <ContextMenu {...props}>
      {Object.keys(colors).map(color => (
        <MenuItem
          className="px-2 py-2 border-b border-gray-200"
          key={color}
          onClick={() => handleClick(color)}
        >
          <div
            className={`rounded-full h-4 w-4 inline-block ${colorToClass(
              color
            )}`}
          ></div>
        </MenuItem>
      ))}
    </ContextMenu>
  );
};

export default StatusForm;
