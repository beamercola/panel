import React from "react";
import Text from "./components/Text";
import Status from "./components/Status";
import StatusForm from "./components/StatusForm";
import TextForm from "./components/TextForm";
import { ContextMenu, ContextMenuTrigger } from "react-contextmenu";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

const components = {
  Status: Status,
  StatusForm: StatusForm,
  Text: Text,
  TextForm: TextForm
};

const Component = ({ id, type, configuration, refetch }) => {
  const [update] = useMutation(UPDATE, { onCompleted: () => refetch() });

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
      </ContextMenu>
    </>
  );
};

export default Component;

const UPDATE = gql`
  mutation MyMutation($id: uuid!, $configuration: jsonb!) {
    update_components(
      where: { id: { _eq: $id } }
      _set: { configuration: $configuration }
    ) {
      returning {
        id
      }
    }
  }
`;
