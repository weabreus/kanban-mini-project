import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { v4 as uuidv4 } from "uuid";

const BoardNewTaskModal = ({
  open,
  setOpen,
  boardId,
  listName,
  setTaskList,
  taskList,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // update the createdAt property
    let now = new Date();

    let task = {
      ...newTask,
      createdDate: `${now.getFullYear()}-${
        now.getMonth() + 1
      }-${now.getDate()}`,
      id: uuidv4(),
    };

    let newTaskList = [...taskList];

    newTaskList.push(task);
    window.localStorage.setItem("tasks", JSON.stringify(newTaskList));
    setTaskList(newTaskList);
    setOpen(false);
  };
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    assignee: "",
    status: "To Do",
    priority: "Low",
    createdDate: "",
    dueDate: "",
    boardId: boardId,
    listName: listName,
  });

  useEffect(() => {
    return () => {
      setNewTask({
        title: "",
        description: "",
        assignee: "",
        status: "To Do",
        priority: "Low",
        createdDate: "",
        dueDate: "",
        boardId: boardId,
        listName: listName,
      });
    };
  }, []);

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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
                <div>
                  <div className="flex justify-between items-center">
                    <h1>Creating a new task</h1>
                    <XCircleIcon
                      onClick={() => setOpen(false)}
                      className="h-6 w-6 text-red-500"
                    />
                  </div>
                  <div>
                    <form onSubmit={handleSubmit} method="POST">
                      <div className="sm:overflow-hidden">
                        <div className="space-y-6 bg-white px-4 py-6 sm:p-6">
                          <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-6">
                              <label
                                htmlFor="title"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Title
                              </label>
                              <input
                                onChange={(e) =>
                                  setNewTask({
                                    ...newTask,
                                    title: e.currentTarget.value,
                                  })
                                }
                                value={newTask.title}
                                type="text"
                                name="title"
                                id="title"
                                autoComplete="off"
                                className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                            <div className="col-span-6">
                              <label
                                htmlFor="description"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Description
                              </label>
                              <div className="mt-2">
                                <textarea
                                  onChange={(e) =>
                                    setNewTask({
                                      ...newTask,
                                      description: e.currentTarget.value,
                                    })
                                  }
                                  id="description"
                                  name="description"
                                  rows={3}
                                  className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  placeholder="Brief description for your task."
                                  value={newTask.description}
                                />
                              </div>
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="assignee"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Assignee
                              </label>
                              <input
                                onChange={(e) =>
                                  setNewTask({
                                    ...newTask,
                                    assignee: e.currentTarget.value,
                                  })
                                }
                                value={newTask.assignee}
                                type="text"
                                name="assignee"
                                id="assignee"
                                autoComplete="off"
                                className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="priority"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Priority
                              </label>
                              <select
                                onChange={(e) => {
                                  setNewTask({
                                    ...newTask,
                                    priority: e.currentTarget.value,
                                  });
                                }}
                                id="priority"
                                name="priority"
                                autoComplete="off"
                                className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={newTask.priority}
                              >
                                <option>Low</option>
                                <option>Medium</option>
                                <option>High</option>
                              </select>
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="dueDate"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Due Date
                              </label>
                              <input
                                onChange={(e) =>
                                  setNewTask({
                                    ...newTask,
                                    dueDate: e.currentTarget.value,
                                  })
                                }
                                type="date"
                                name="dueDate"
                                id="dueDate"
                                autoComplete="off"
                                className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={newTask.dueDate}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row-reverse gap-2 items-center mt-4">
                        <button
                          type="submit"
                          className="rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        >
                          Add task
                        </button>
                        <button
                          onClick={() => setOpen(false)}
                          type="button"
                          className="rounded-md bg-gray-300 px-3 py-2 text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default BoardNewTaskModal;


