import React, { useState, useEffect } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Helmet from "react-helmet";
import Board from "../components/Board";

const Home = () => {
  const { loading, error, data } = useQuery(query);
  if (loading || error) return <p>Loading...</p>;

  const { boards } = data;
  const [currentBoard, setCurrentBoard] = useState(boards[0]);

  return (
    <>
      <Helmet title="Boards" />
      <div>{boards.map(board => board.name)}</div>
      <Board board={currentBoard} />
    </>
  );
};

export default Home;

const query = gql`
  query Index {
    boards {
      id
      name
    }
  }
`;
