import React, { useState } from "react";
import Board from "./components/Board";
import "./style/root.scss";
import Winner from "./components/Winner";

const app = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = Winner(board);
  console.log(winner);
  const message = winner
    ? `Winner is ${winner}`
    : `Next is ${isXNext ? "X" : "O"}`;

  const handleSqaureClick = (position) => {
    if (board[position] || winner) {
      return;
    }

    setBoard((prev) => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isXNext ? "X" : "O";
        }

        return square;
      });
    });

    setIsXNext((prev) => !prev);
  };

  return (
    <>
      <div className="app">
        <h1>TICTACTOE</h1>
        <h2>{message}</h2>
        <Board board={board} handleSqaureClick={handleSqaureClick} />
      </div>
    </>
  );
};
export default app;
