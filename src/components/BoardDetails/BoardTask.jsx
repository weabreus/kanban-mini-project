import React from "react";

const BoardTask = ({ task, setOpen, setSelectedTask, taskList, setTaskList }) => {
  
  return (
    <div
      draggable
     
      // onDrag={(e) => console.log(e)}
      onDragStart={(e) => e.dataTransfer.setData("text/plain", task.id)}
      onClick={() => {
        setSelectedTask(task);
        setOpen(true);
      }}
      className="flex flex-col gap-2 bg-contrast-600 text-darkbg-100 rounded-md p-2 shadow-sm"
    >
      <p className="text-sm">{task?.title}</p>
      <div className="flex justify-between text-xs font-medium">
        {/* <p>Created: {task?.createdDate}</p> */}
        {/* <p>Due date: {task?.dueDate}</p> */}
      </div>
    </div>
  );
};

export default BoardTask;
