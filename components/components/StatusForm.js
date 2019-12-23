import React from "react";
import { MenuItem } from "react-contextmenu";
import { colors, colorToClass } from "../../lib/color";

const StatusForm = props => {
  const { configuration, id, update } = props;

  const handleClick = color => {
    update({
      variables: { id, configuration: { ...configuration, color } }
    });
  };

  return (
    <>
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
    </>
  );
};

export default StatusForm;
