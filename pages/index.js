import React, { useState, useEffect } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Board from "../components/Board";
import "../style.css";
import moment from "moment";

moment.locale("en", {
  relativeTime: {
    future: "%s",
    past: "%s",
    s: "S",
    m: "1M",
    mm: "%dM",
    h: "1H",
    hh: "%dH",
    d: "1D",
    dd: "%dd",
    M: "1M",
    MM: "%dM",
    y: "1Y",
    yy: "%dY"
  }
});

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
