import React, { useState, useEffect } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const BoardList = ({ currentBoard, setCurrentBoard }) => {
  const { loading, error, data } = useQuery(query);

  console.log(error);

  if (loading || error) return <p>Loading...</p>;

  const { boards } = data;

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
