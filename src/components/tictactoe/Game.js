import React, { useState } from "react";
import Board from "./Board";
import "./GameStyle.css";
import { calculateWinner } from "../../helper";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);
  const handleClick = (index) => {
    const boardCopy =  [...board];
    if (winner || boardCopy[index]) return; 
    boardCopy[index] = xIsNext? "X" : "O";
    setBoard(boardCopy);
    setXIsNext((xIsNext)=> !xIsNext);
  };
  const handleResetGame = () => {
      setBoard(Array(9).fill(null));
      setXIsNext(true);
  };
  return (
    <div>
      <Board cells={board} onClick={handleClick}></Board>
      <button onClick={handleResetGame}>Reset game</button>
      {winner ?  `Winner is ${xIsNext ? "O" : "X"}` : ""}
    </div>
  );
};

export default Game;
