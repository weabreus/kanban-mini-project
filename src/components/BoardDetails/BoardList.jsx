import React, { useState } from "react";
import BoardTask from "./BoardTask";
import BoardTaskModal from "./BoardTaskModal";

const BoardList = ({ boardListName, tasks }) => {
  const [open, setOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState();

  return (
    <>
      <div className=" w-1/5 bg-gray-200 rounded-md border border-gray-300 p-2 text-gray-900 shadow-sm">
        <h1>{boardListName}</h1>
        <div className="flex flex-col gap-2">
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
      </div>
      <BoardTaskModal
        open={open}
        setOpen={setOpen}
        selectedTask={selectedTask}
  
      />
    </>
  );
};

export default BoardList;
