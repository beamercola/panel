import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Board from "../components/Board";
import BoardList from "../components/BoardList";
import "../style.css";

const Index = () => {
  const [currentBoard, setCurrentBoard] = useState();
  const { data: user } = useQuery(USER_QUERY);
  console.log(user);

  return (
    <>
      <div className="flex fixed w-screen h-screen p-16">
        {user && user.me && user.me.name}
        {!user && <a href="/api/auth/login">Log In</a>}
        <div className="w-2/12 flex-shrink-0 p-6">
          {/* <BoardList
            currentBoard={currentBoard}
            setCurrentBoard={setCurrentBoard}
          /> */}
        </div>
        <div className="p-6 flex-grow rounded-lg">
          {/* {currentBoard && <Board id={currentBoard.id} />} */}
        </div>
      </div>
    </>
  );
};

export default Index;

const USER_QUERY = gql`
  query USER_QUERY {
    me @client {
      id
      name
    }
  }
`;
