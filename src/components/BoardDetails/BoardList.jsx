import React, { useState } from "react";
import BoardTask from "./BoardTask";
import BoardTaskModal from "./BoardTaskModal";
import { SquaresPlusIcon } from "@heroicons/react/24/outline";
import BoardNewTaskModal from "./BoardNewTaskModal";
import { useParams } from "react-router-dom";

const BoardList = ({ boardListName, tasks, setTaskList, taskList }) => {
  const [open, setOpen] = useState(false);
  const [openNewTaskModal, setOpenNewTaskModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState();
  const {boardId} = useParams();
  return (
    <>
      <div className="relative w-1/5 bg-gray-200 rounded-md border border-gray-300 p-2 text-gray-900 shadow-sm max-h-[calc(100vh-190px)]">
        <h1>{boardListName}</h1>
        <div className="flex flex-col gap-2 mb-10 overflow-y-auto max-h-[calc(100%-65px)]">
          {tasks.length > 0 &&
            tasks.map((task) => (
              <BoardTask
                key={`${boardListName}-task-${task.id}`}
                task={task}
                setOpen={setOpen}
                setSelectedTask={setSelectedTask}
              />
            ))}
        </div>
        {/* Add new list button */}
        <div className="absolute left-0 bottom-1.5 w-[calc(100%-16px)] ">
          <button
            onClick={() => {
              setOpenNewTaskModal(true);
            }}
            type="button"
            className="mx-2 w-full justify-center flex items-center gap-2 rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            <SquaresPlusIcon className="h-5 w-5 font-bold" /> Add new task
          </button>
        </div>
      </div>
      <BoardTaskModal
        open={open}
        setOpen={setOpen}
        selectedTask={selectedTask}
      />
      <BoardNewTaskModal
        open={openNewTaskModal}
        setOpen={setOpenNewTaskModal}
        boardId={boardId}
        listName={boardListName}
        setTaskList={setTaskList}
        taskList={taskList}
      />
    </>
  );
};

export default BoardList;
