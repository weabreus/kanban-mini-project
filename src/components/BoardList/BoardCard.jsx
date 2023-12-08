import React from 'react'
import { Link } from 'react-router-dom'

const BoardCard = ({board}) => {
  return (
    <Link to={`/board/${board.id}`} className='bg-white border rounded-md border-gray-400 shadow-md w-1/5 h-[25vh] p-3'>{board.name}</Link>
  )
}

export default BoardCard