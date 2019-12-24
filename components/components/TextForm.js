import React, { useState } from "react";
import { MenuItem } from "react-contextmenu";

const TextForm = props => {
  const [value, setValue] = useState(
    props.configuration && props.configuration.value
  );
  const { configuration, id, update } = props;

  const handleSubmit = () => {
    update({
      variables: { id, configuration: { ...configuration, value } }
    });
  };

  return (
    <>
      <div className="px-2 py-1 flex">
        <input
          className="input"
          onChange={e => setValue(e.target.value)}
          placeholder="Enter Text"
          type="text"
          value={value}
        />
        <button
          className="bg-transparent font-medium ml-2"
          onClick={() => handleSubmit()}
        >
          Save
        </button>
      </div>
    </>
  );
};

export default TextForm;
