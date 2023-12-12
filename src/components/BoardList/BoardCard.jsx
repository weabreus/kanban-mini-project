import { PencilIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const BoardCard = ({ board }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  return (
    <Link
      onMouseEnter={(e) => setIsHovering(true)}
      onMouseLeave={(e) => setIsHovering(false)}
      to={`/board/${board.id}`}
      className="relative bg-contrast-500 border rounded-md border-gray-400 shadow-md w-1/5 h-[25vh] p-3  text-darkbg-100"
    >
      <span>{board.name}</span>
      {isHovering && (
        <div className="absolute top-2 right-2 flex items-center gap-2">
          <button className="p-1">
            <PencilSquareIcon className="w-5 h-5" />
          </button>
          <button 
          onClick={(e) => setIsDeleting(!isDeleting)}
          className="p-1 border border-darkbg-100 rounded-full">
            <TrashIcon className="w-4 h-4" />
          </button>
        </div>
      )}

      {isDeleting && (<div className="flex flex-row-reverse gap-2 items-center mt-4">
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
                      </div>)}
    </Link>
  );
};

export default BoardCard;
