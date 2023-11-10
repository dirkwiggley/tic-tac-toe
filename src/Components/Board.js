import React from 'react'
import Box from "./Box"
import "./Board.css"

const Board = ({board, onClick}) => {
  return (
    <div className="board">
      {board.map((value, index) => {
        return <Box value={value} onClick={() => onClick(index, value)} />
      })}
    </div>
  );
}

export default Board;