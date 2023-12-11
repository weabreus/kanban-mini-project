import React from "react";

const BoardTask = ({ task, setOpen, setSelectedTask, taskList, setTaskList }) => {
  
  return (
    <div
      draggable
     
      onDrag={(e) => console.log(e)}
      onDragStart={(e) => e.dataTransfer.setData("text/plain", task.id)}
      onClick={() => {
        setSelectedTask(task);
        setOpen(true);
      }}
      className="flex flex-col gap-2 bg-gray-700 text-white rounded-md p-2"
    >
      <p className="text-sm">{task?.title}</p>
      <div className="flex justify-between text-xs">
        <p>Created: {task?.createdDate}</p>
        <p>Due date: {task?.dueDate}</p>
      </div>
    </div>
  );
};

export default BoardTask;
