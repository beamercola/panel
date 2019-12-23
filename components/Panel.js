import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Component from "./Component";

const loadComponents = () => {};

const Panel = ({ id }) => {
  const { loading, error, data, refetch } = useQuery(query, {
    variables: { id }
  });

  if (loading || error) return <p>Loading Panel... {error}</p>;

  const { panels_by_pk: panel } = data;
  const { components } = panel;

  return (
    <div className="bg-white rounded-lg shadow-lg">
      <ul>
        {components.map(component => (
          <li className="px-4 py-2 border-b border-gray-100" key={component.id}>
            <Component
              id={component.id}
              type={component.type}
              configuration={component.configuration}
            />
          </li>
        ))}
      </ul>
      <button
        className="px-4 py-2 text-xs uppercase font-bold text-gray-400"
        onClick={() => refetch()}
      >
        Refetch
      </button>
    </div>
  );
};

export default Panel;

const query = gql`
  query Panel($id: uuid!) {
    panels_by_pk(id: $id) {
      id
      components {
        id
        type
        configuration
      }
    }
  }
`;
