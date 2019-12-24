import React from "react";
import Text from "./components/Text";
import Chart from "./components/Chart";
import ChartForm from "./components/ChartForm";
import Status from "./components/Status";
import StatusForm from "./components/StatusForm";
import TextForm from "./components/TextForm";
import AssignedIssues from "./components/GitHub/AssignedIssues";
import AssignedIssuesForm from "./components/GitHub/AssignedIssuesForm";
import LatestCommit from "./components/GitHub/LatestCommit";
import LatestCommitForm from "./components/GitHub/LatestCommitForm";

import {
  ContextMenu,
  ContextMenuTrigger,
  MenuItem,
  SubMenu
} from "react-contextmenu";

const components = {
  "GitHub/AssignedIssues": AssignedIssues,
  "GitHub/AssignedIssuesForm": AssignedIssuesForm,
  "GitHub/LatestCommit": LatestCommit,
  "GitHub/LatestCommitForm": LatestCommitForm,
  Chart: Chart,
  ChartForm: ChartForm,
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

          <MenuItem
            onClick={() =>
              insert({
                variables: {
                  type: "Chart",
                  panel_id: panelId,
                  configuration: {},
                  position: 10
                }
              })
            }
          >
            Chart
          </MenuItem>

          <SubMenu title="GitHub">
            <MenuItem
              onClick={() =>
                insert({
                  variables: {
                    type: "GitHub/LatestCommit",
                    panel_id: panelId,
                    configuration: { owner: "", repo: "" },
                    position: 10
                  }
                })
              }
            >
              Latest Commit
            </MenuItem>
            <MenuItem
              onClick={() =>
                insert({
                  variables: {
                    type: "GitHub/AssignedIssues",
                    panel_id: panelId,
                    configuration: { owner: "", repo: "" },
                    position: 10
                  }
                })
              }
            >
              Assigned Issues
            </MenuItem>
          </SubMenu>
        </SubMenu>
        <MenuItem onClick={() => destroy({ variables: { id: id } })}>
          Delete
        </MenuItem>
      </ContextMenu>
    </>
  );
};

export default Component;
