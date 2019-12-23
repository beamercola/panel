import React from "react";
import Text from "./components/Text";
import Status from "./components/Status";
import StatusForm from "./components/StatusForm";
import TextForm from "./components/TextForm";

import {
  ContextMenu,
  ContextMenuTrigger,
  MenuItem,
  SubMenu
} from "react-contextmenu";

const components = {
  Status: Status,
  StatusForm: StatusForm,
  Text: Text,
  TextForm: TextForm
};

const Component = ({
  id,
  type,
  configuration,
  panelId,
  insert,
  update,
  destroy
}) => {
  return (
    <>
      <ContextMenuTrigger id={id}>
        {React.createElement(components[type], configuration)}
      </ContextMenuTrigger>

      <ContextMenu
        className="bg-white border border-gray-300 rounded shadow-lg w-64"
        id={id}
      >
        {React.createElement(components[`${type}Form`], {
          id,
          configuration,
          update
        })}
        <MenuItem divider />
        <SubMenu title="Insert">
          <MenuItem
            onClick={() =>
              insert({
                variables: {
                  type: "Text",
                  panel_id: panelId,
                  configuration: {},
                  position: 10
                }
              })
            }
          >
            Text
          </MenuItem>
          <MenuItem
            onClick={() =>
              insert({
                variables: {
                  type: "Status",
                  panel_id: panelId,
                  configuration: { color: "blue" },
                  position: 10
                }
              })
            }
          >
            Indicator
          </MenuItem>
        </SubMenu>
        <MenuItem onClick={() => destroy({ variables: { id: id } })}>
          Delete
        </MenuItem>
      </ContextMenu>
    </>
  );
};

export default Component;
