import React, { useState, useEffect } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Board from "../components/Board";
import "../style.css";

const Index = () => {
  const { loading, error, data } = useQuery(query);
  if (loading || error) return <p>Loading...</p>;

  const { boards } = data;
  const [currentBoard, setCurrentBoard] = useState(boards[0]);

  return (
    <>
      <div className="flex fixed w-screen h-screen p-16">
        <div className="w-2/12 flex-shrink-0 p-6">
          <ul className="text-sm">
            {boards.map(board => (
              <li
                className={`${board.id === currentBoard.id && "font-normal"}`}
                key={board.id}
              >
                {board.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-6 flex-grow rounded-lg">
          <Board id={currentBoard.id} />
        </div>
      </div>
    </>
  );
};

export default Index;

const query = gql`
  query Index {
    boards {
      id
      name
    }
  }
`;
