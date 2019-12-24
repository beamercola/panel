import React from "react";
import Panel from "./Panel";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const Board = ({ id }) => {
  const { loading, error, data } = useQuery(query, {
    variables: { id: id }
  });
  if (loading || error) return <p>Loading Board...</p>;
  const { boards_by_pk: board } = data;

  return (
    <div className="flex -mx-6">
      {board.panels.map(panel => (
        <div key={panel.id} className="w-1/3 px-6">
          <Panel id={panel.id} />
        </div>
      ))}
    </div>
  );
};

export default Board;

const query = gql`
  query Board($id: uuid!) {
    boards_by_pk(id: $id) {
      id
      name
      panels {
        id
      }
    }
  }
`;
