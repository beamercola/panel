import React, { useState } from "react";
import { ContextMenu, MenuItem } from "react-contextmenu";

const TextForm = props => {
  const [value, setValue] = useState(props.configuration.value);

  return (
    <ContextMenu {...props}>
      <MenuItem
        className="px-2 py-2 border-b border-gray-200 flex"
        preventClose={true}
      >
        <input
          className="w-full border border-gray-400 rounded px-2 py-1"
          onChange={e => setValue(e.target.value)}
          placeholder="Enter Text"
          type="text"
          value={value}
        />
        <input
          className="bg-transparent font-medium ml-2"
          type="submit"
          value="Save"
          onClick={() => console.log(value)}
        />
      </MenuItem>
    </ContextMenu>
  );
};

export default TextForm;
