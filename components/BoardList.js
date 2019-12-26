import React, { useState, useEffect } from "react";
import { useAuth } from "use-auth0-hooks";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const BoardList = ({ auth, currentBoard, setCurrentBoard }) => {
  const { loading, error, data } = useQuery(query, {
    // context: { headers: { authorization: `Bearer ${accessToken}` } }
  });

  console.log(error);

  if (loading || error) return <p>Loading...</p>;

  const { boards } = data;
  const { user } = auth;

  setCurrentBoard(boards[0]);

  return (
    <ul className="text-sm">
      {boards.map(board => (
        <li
          className={`${currentBoard &&
            board.id === currentBoard.id &&
            "font-normal"}`}
          key={board.id}
        >
          {board.name}
        </li>
      ))}
    </ul>
  );
};

export default BoardList;

const query = gql`
  query Index {
    boards {
      id
      name
    }
  }
`;
