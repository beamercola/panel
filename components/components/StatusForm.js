import React, { useState } from "react";
import { MenuItem } from "react-contextmenu";
import { colors, colorToClass } from "../../lib/color";

const StatusForm = props => {
  const { configuration, id, update } = props;
  const [currentColor, setCurrentColor] = useState(configuration.color);

  const handleClick = color => {
    setCurrentColor(color);
    update({
      variables: { id, configuration: { ...configuration, color } }
    });
  };

  return (
    <>
      <ul className="flex px-2">
        {Object.keys(colors).map(color => (
          <li
            className={`px-2 py-2 flex-grow `}
            key={color}
            onClick={() => handleClick(color)}
          >
            <div
              className={`rounded-full h-4 w-4 inline-block ${currentColor ===
                color && "border-black border-2"} ${colorToClass(color)}`}
            ></div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default StatusForm;
