import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon, TrashIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { classNames } from "../../utils/utils";

export default function BoardTaskModal({
  open,
  setOpen,
  selectedTask,
  setSelectedTask,
  uniqueLists,
  taskList,
  setTaskList,
}) {
  const [isDeleting, setIsDeleting] = useState(false);

  const updateTaskField = (fieldName, newValue) => {
    let newTaskList = [...taskList];

    let elementIndex = newTaskList.findIndex(
      (element) => element.id === selectedTask.id
    );

    newTaskList[elementIndex][fieldName] = newValue;
    window.localStorage.setItem("tasks", JSON.stringify(newTaskList));
    setTaskList(newTaskList);
  };

  const handleDeleteTask = () => {
    let newTaskList = [...taskList];

    let elementIndex = newTaskList.findIndex(
      (element) => element.id === selectedTask.id
    );

    newTaskList.splice(elementIndex, 1);

    window.localStorage.setItem("tasks", JSON.stringify(newTaskList));
    setTaskList(newTaskList);
    setOpen(false);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-contrast-500 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md sm:p-6">
                <div className="text-darkbg-100">
                  <div className="flex justify-between items-center">
                    <input
                      onChange={(e) => {
                        setSelectedTask({
                          ...selectedTask,
                          title: e.currentTarget.value,
                        });
                        updateTaskField("title", e.currentTarget.value);
                      }}
                      className="font-bold p-0 border-0 w-full bg-transparent text-darkbg-100 box-border h-fit focus:ring-1 focus:ring-main-800"
                      type="text"
                      value={selectedTask?.title}
                    />
                    {/* <h1 className="font-bold">{selectedTask?.title}</h1> */}
                    <div className="flex gap-2 items-center">
                      <select
                        onChange={(e) => {
                          setSelectedTask({
                            ...selectedTask,
                            status: e.currentTarget.value,
                          });
                          updateTaskField("status", e.currentTarget.value);
                        }}
                        className={classNames(
                          selectedTask?.status === "To Do"
                            ? "bg-red-500 text-white"
                            : "",
                          selectedTask?.status === "In Progress"
                            ? " bg-yellow-500 text-gray-900"
                            : "",
                          selectedTask?.status === "Done"
                            ? "bg-green-500 text-white"
                            : "",
                          "px-2 py-1 rounded-md text-xs font-semibold min-w-fit"
                        )}
                        name="status"
                        id="status"
                        value={selectedTask?.status}
                      >
                        <option>To Do</option>
                        <option>In Progress</option>
                        <option>Done</option>
                      </select>
                      <button>
                        <XCircleIcon
                          onClick={() => setOpen(false)}
                          className="h-8 w-6 text-contrast-300"
                        />
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-1 items-center mt-0">
                    <p className="text-xs">
                      in list{" "}
                      {/* <span className=" italic underline">
                      {selectedTask?.listName}
                    </span> */}
                    </p>

                    <select
                      onChange={(e) => {
                        setSelectedTask({
                          ...selectedTask,
                          listName: e.currentTarget.value,
                        });
                        updateTaskField("listName", e.currentTarget.value);
                      }}
                      className={
                        "text-xs italic underline p-0 border-0 appearance-none bg-none bg-transparent focus:ring-0 "
                      }
                      name="listName"
                      id="listName"
                      value={selectedTask?.listName}
                    >
                      {uniqueLists &&
                        uniqueLists.map((list) => (
                          <option key={`list-option-${list}`} value={list}>
                            {list}
                          </option>
                        ))}
                    </select>
                  </div>

                  <div className="mt-4 bg-contrast-400 rounded-md p-2">
                    {/* <h4 className="text-sm font-semibold text-black">Details</h4> */}
                    <textarea
                      onChange={(e) => {
                        setSelectedTask({
                          ...selectedTask,
                          description: e.currentTarget.value,
                        });
                        updateTaskField("description", e.currentTarget.value);
                      }}
                      className="text-sm w-full p-0 bg-transparent border-0 focus:ring-0"
                      rows={3}
                      value={selectedTask?.description}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className=" items-center justify-between text-xs mt-2">
                      <div className="task-date">
                        <span className="font-bold">Created:</span>{" "}
                        <input
                          onChange={(e) => {
                            setSelectedTask({
                              ...selectedTask,
                              createdDate: e.currentTarget.value,
                            });
                            updateTaskField(
                              "createdDate",
                              e.currentTarget.value
                            );
                          }}
                          className="task-date-input text-xs p-0 border-0 bg-transparent text-darkbg-100 box-border h-fit focus:ring-1 focus:ring-main-800"
                          type="date"
                          value={selectedTask?.createdDate}
                        />
                      </div>

                      <div className="">
                        <span className="font-bold">Assignee:</span>{" "}
                        <input
                          onChange={(e) => {
                            setSelectedTask({
                              ...selectedTask,
                              assignee: e.currentTarget.value,
                            });
                            updateTaskField("assignee", e.currentTarget.value);
                          }}
                          type="text"
                          className="text-xs p-0 border-0 bg-transparent text-darkbg-100 box-border h-fit focus:ring-1 focus:ring-main-800"
                          value={selectedTask?.assignee}
                        />
                      </div>
                    </div>
                    <div className=" items-center justify-between text-xs mt-2">
                      <div className="task-date">
                        <span className="font-bold">Due:</span>{" "}
                        <input
                          onChange={(e) => {
                            setSelectedTask({
                              ...selectedTask,
                              dueDate: e.currentTarget.value,
                            });
                            updateTaskField("dueDate", e.currentTarget.value);
                          }}
                          className="task-date-input text-xs p-0 border-0 bg-transparent text-darkbg-100 box-border h-fit focus:ring-1 focus:ring-main-800"
                          type="date"
                          value={selectedTask?.dueDate}
                        />
                      </div>
                      <div>
                        <span className="font-bold">Priority:</span>{" "}
                        <select
                          onChange={(e) => {
                            setSelectedTask({
                              ...selectedTask,
                              priority: e.currentTarget.value,
                            });
                            updateTaskField("priority", e.currentTarget.value);
                          }}
                          className={
                            "text-xs p-0 border-0 appearance-none bg-none bg-transparent focus:ring-0 "
                          }
                          name="priority"
                          id="priority"
                          value={selectedTask?.priority}
                        >
                          <option value={"Low"}>Low</option>
                          <option value={"Medium"}>Medium</option>
                          <option value={"High"}>High</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center mt-4">
                    <div className="flex justify-center w-fit border rounded-full p-1 text-main-800 border-main-800">
                      <button onClick={() => setIsDeleting(!isDeleting)}>
                        <TrashIcon className="w-5 h-5" />
                      </button>
                    </div>
                    {isDeleting && (
                      <div className="flex flex-row-reverse gap-2 items-center mt-4">
                        <button
                          onClick={() => {
                            handleDeleteTask();
                          }}
                          type="button"
                          className="rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
                        >
                          Delete
                        </button>
                        <button
                          onClick={() => setIsDeleting(false)}
                          type="button"
                          className="rounded-md bg-gray-300 px-3 py-2 text-sm font-semibold text-gray-600 shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300"
                        >
                          Cancel
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
