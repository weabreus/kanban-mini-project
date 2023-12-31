import { PlusIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tasks from "../../data/tasks";
import { onlyUnique } from "../../utils/utils";
import BoardList from "./BoardList";
import BoardNewListModal from "./BoardNewListModal";

const BoardDetails = () => {
  const { boardId } = useParams();

  const [taskList, setTaskList] = useState([]);

  const [uniqueLists, setUniqueLists] = useState([]);

  const [openNewListModal, setOpenNewListModal] = useState(false);

  const [dropListName, setDropListName] = useState();

  const handleAddList = (newListName) => {
    let newUniqueLists = [...uniqueLists];
    newUniqueLists.push(newListName);
    setUniqueLists(newUniqueLists);
  }

  useEffect(() => {
    
    let tasksStorage = JSON.parse(window.localStorage.getItem("tasks"));

    if (tasksStorage) {
      
      let filteredTasks = tasksStorage.filter(
        (task) => task.boardId === boardId
      );
      setTaskList(filteredTasks);

      let uniqueListsNames = filteredTasks
        .map((task) => task.listName)
        .filter(onlyUnique);

      setUniqueLists(uniqueListsNames);
    }
  }, []);
  
  return (
    <div className="flex gap-2 w-full h-full">
      {/* Render all unique lists in taskList */}
      {uniqueLists &&
        uniqueLists.map((listName) => (
          <BoardList
            key={`board-${boardId}-list-${listName}`}
            boardListName={listName}
            tasks={taskList.filter((task) => task.listName === listName)}
            taskList={taskList}
            setTaskList={setTaskList}
            dropListName={dropListName}
            setDropListName={setDropListName}
            uniqueLists={uniqueLists}
          />
        ))}
      <button onClick={() => setOpenNewListModal(true)} className="flex gap-2 items-center justify-center bg-main-800 text-white h-fit px-4 py-2 rounded-md hover:bg-main-700 focus:out-main-800 shadow-md font-medium">
        <PlusIcon className="h-4 w-4" />
        Add new list
      </button>
      {openNewListModal && <BoardNewListModal open={openNewListModal} setOpen={setOpenNewListModal} handleAddList={handleAddList}/>}
    </div>
  );
};

export default BoardDetails;
