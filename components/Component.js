import React from "react";
import Text from "./components/Text";
import Status from "./components/Status";

const components = {
  Status: Status,
  Text: Text
};

const Component = ({ type, configuration }) => {
  console.log(type);
  return React.createElement(components[type], configuration);
};

export default Component;
