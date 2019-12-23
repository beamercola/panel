import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const loadComponents = () => {};

const Panel = ({ id }) => {
  const { loading, error, data, refetch } = useQuery(query, {
    variables: { id }
  });

  if (loading || error) return <p>Loading Panel... {error}</p>;

  const { panels_by_pk: panel } = data;
  const { components } = panel;

  return (
    <div className="card">
      <ul>
        {components.map(component => (
          <li key={component.id}>{component.type}</li>
        ))}
      </ul>
      <button onClick={() => refetch()}>Refetch</button>
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
