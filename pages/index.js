import React, { useState } from "react";
import Board from "../components/Board";
import BoardList from "../components/BoardList";
import "../style.css";

const Index = ({ auth }) => {
  const [currentBoard, setCurrentBoard] = useState();

  return (
    <>
      <div className="flex fixed w-screen h-screen p-16">
        <div className="w-2/12 flex-shrink-0 p-6">
          <BoardList
            currentBoard={currentBoard}
            setCurrentBoard={setCurrentBoard}
          />
        </div>
        <div className="p-6 flex-grow rounded-lg">
          {currentBoard && <Board id={currentBoard.id} />}
        </div>
      </div>
    </>
  );
};

export default Index;
