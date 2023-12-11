import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { classNames } from "../../utils/utils";

export default function BoardTaskModal({
  open,
  setOpen,
  selectedTask,
  uniqueLists,
}) {
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                  <div className="flex justify-between">
                    <input
                      className="font-bold p-0 border-0 w-full"
                      type="text"
                      value={selectedTask?.title}
                    />
                    {/* <h1 className="font-bold">{selectedTask?.title}</h1> */}
                    <div className="flex gap-2 items-center">
                      {/* <p
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
                          "px-2 py-1 rounded-md text-xs font-semibold"
                        )}
                      >
                        {selectedTask?.status}
                      </p> */}
                      <XCircleIcon
                        onClick={() => setOpen(false)}
                        className="h-6 w-6 text-red-500"
                      />
                    </div>
                  </div>
                  <div className="flex gap-1 items-center mt-1">
                    <p className="text-xs">
                      in list{" "}
                      {/* <span className=" italic underline">
                      {selectedTask?.listName}
                    </span> */}
                    </p>

                    <select
                      className={
                        "text-xs italic underline p-0 border-0 appearance-none bg-none"
                      }
                      name="listName"
                      id="listName"
                    >
                      {uniqueLists &&
                        uniqueLists.map((list) => <option>{list}</option>)}
                    </select>
                  </div>

                  <div className="mt-2 bg-gray-300 rounded-md p-2">
                    {/* <h4 className="text-sm font-semibold text-black">Details</h4> */}
                    <textarea className="text-sm w-full p-0 bg-transparent border-0" rows={3} value={selectedTask?.description} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className=" items-center justify-between text-xs mt-2">
                      <p>
                        <span className="font-bold">Created:</span>{" "}
                        {selectedTask?.createdDate}
                      </p>
                      <p>
                        <span className="font-bold">Assignee:</span>{" "}
                        {selectedTask?.assignee}
                      </p>
                    </div>
                    <div className=" items-center justify-between text-xs mt-2">
                      <p>
                        <span className="font-bold">Due:</span>{" "}
                        {selectedTask?.dueDate}
                      </p>
                      <p>
                        <span className="font-bold">Priority:</span>{" "}
                        {selectedTask?.priority}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <p
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
                        "px-2 py-1 rounded-md text-xs font-semibold"
                      )}
                    >
                      {selectedTask?.status}
                    </p>
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
