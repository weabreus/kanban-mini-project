import React, { useEffect, useState } from "react";
import boardsList from "../../data/boards";
import BoardCard from "./BoardCard";
import NewBoardModal from "./NewBoardModal";
import { v4 as uuidv4 } from "uuid";

const BoardsList = ({ open, setOpen }) => {
  const [boards, setBoards] = useState([]);

  const handleAddBoard = (newBoardName) => {
    let newBoards = [...boards];
    newBoards.push({
      id: uuidv4(),
      name: newBoardName,
    });
    window.localStorage.setItem("boards", JSON.stringify(newBoards))
    setBoards(newBoards);
  };

  useEffect(() => {
    // check if "boards" key exists in localStorage
    let boardsStorage = JSON.parse(window.localStorage.getItem("boards"));

    if (boardsStorage) {
      setBoards(boardsStorage);
    }

    
  }, []);

  return (
    <div className="flex flex-wrap p-3 gap-3 w-full">
      {boards.length > 0 &&
        boards.map((board) => (
          <BoardCard key={`board-project-${board.id}`} board={board} />
        ))}
      {open && (
        <NewBoardModal
          open={open}
          setOpen={setOpen}
          handleAddBoard={handleAddBoard}
        />
      )}
    </div>
  );
};

export default BoardsList;
