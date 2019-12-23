import React from "react";
import Text from "./components/Text";
import Status from "./components/Status";
import StatusForm from "./components/StatusForm";
import TextForm from "./components/TextForm";
import { ContextMenuTrigger } from "react-contextmenu";

const components = {
  Status: Status,
  StatusForm: StatusForm,
  Text: Text,
  TextForm: TextForm
};

const Component = ({ id, type, configuration }) => {
  return (
    <>
      <ContextMenuTrigger id={id}>
        {React.createElement(components[type], configuration)}
      </ContextMenuTrigger>

      {React.createElement(components[`${type}Form`], {
        id: id,
        className: "bg-white border border-gray-300 rounded shadow-lg w-64",
        configuration: configuration
      })}
    </>
  );
};

export default Component;
