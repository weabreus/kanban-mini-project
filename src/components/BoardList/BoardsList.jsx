import React, { useEffect, useState } from 'react'
import boardsList from '../../data/boards';
import BoardCard from './BoardCard';


const BoardsList = () => {
    const [boards, setBoards] = useState([]);

    useEffect(() => {
        setBoards(boardsList)
    }, []);
  return (
    <div className='flex flex-wrap p-3 gap-3 w-full'>
        {boards.length > 0 && boards.map((board) => <BoardCard board={board} />)}
    </div>
  )
}

export default BoardsList