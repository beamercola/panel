import React, { useState, useEffect } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Head from "next/head";
import Board from "../../components/Board";

const BoardPage = () => {
  const { loading, error, data } = useQuery(query);
  if (loading || error) return <p>Loading...</p>;

  const { boards } = data;
  const [currentBoard, setCurrentBoard] = useState(boards[0]);

  return (
    <>
      <Head>
        <title>Boards</title>
      </Head>
      <div>{boards.map(board => board.name)}</div>
      <Board id={currentBoard.id} />
    </>
  );
};

export default BoardPage;

const query = gql`
  query Index {
    boards {
      id
      name
    }
  }
`;
