import React from 'react'

const BoardTask = ({task, setOpen, setSelectedTask}) => {
  return (
    <div onClick={() => {
      setSelectedTask(task)
      setOpen(true)
      }} className='flex flex-col gap-2 bg-gray-700 text-white rounded-md p-2'>
        <p className='text-sm'>{task?.title}</p>
        <div className='flex justify-between text-xs'>
            <p>Created: {task?.createdDate}</p>
            <p>Due date: {task?.dueDate}</p>
        </div>
    </div>
  )
}

export default BoardTask