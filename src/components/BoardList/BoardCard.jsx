import React from 'react'

const BoardCard = ({board}) => {
  return (
    <div className='bg-white border rounded-md border-gray-400 shadow-md w-1/5 h-[25vh] p-3'>{board.name}</div>
  )
}

export default BoardCard