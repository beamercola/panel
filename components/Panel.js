import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Component from "./Component";

const Panel = ({ id }) => {
  const [update] = useMutation(UPDATE, { onCompleted: () => refetch() });
  const [insert] = useMutation(INSERT, { onCompleted: () => refetch() });
  const [destroy] = useMutation(DESTROY, { onCompleted: () => refetch() });
  const { loading, error, data, refetch } = useQuery(query, {
    variables: { id }
  });

  if (loading || error) return <p>Loading Panel... {error}</p>;

  const { panels_by_pk: panel } = data;
  const { components } = panel;

  return (
    <>
      <div className="bg-white rounded-lg shadow-lg">
        <ul>
          {components.map(component => (
            <li
              className="px-4 py-2 border-b border-gray-100 last:border-b-0"
              key={component.id}
            >
              <Component
                id={component.id}
                panelId={id}
                type={component.type}
                configuration={component.configuration}
                refetch={refetch}
                update={update}
                insert={insert}
                destroy={destroy}
              />
            </li>
          ))}
        </ul>
      </div>
      <button
        className="px-4 py-2 text-xs uppercase font-medium text-gray-500"
        onClick={() => refetch()}
      >
        Refetch
      </button>
    </>
  );
};

export default Panel;

const query = gql`
  query Panel($id: uuid!) {
    panels_by_pk(id: $id) {
      id
      components(order_by: { position: asc }) {
        id
        type
        configuration
        position
      }
    }
  }
`;

const UPDATE = gql`
  mutation UpdateComponent($id: uuid!, $configuration: jsonb!) {
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

const INSERT = gql`
  mutation InsertComponent(
    $type: String!
    $panel_id: uuid!
    $position: Int
    $configuration: jsonb
  ) {
    insert_components(
      objects: {
        type: $type
        panel_id: $panel_id
        position: $position
        configuration: $configuration
      }
    ) {
      returning {
        id
      }
    }
  }
`;

const DESTROY = gql`
  mutation DeleteComponent($id: uuid!) {
    delete_components(where: { id: { _eq: $id } }) {
      returning {
        id
      }
    }
  }
`;
