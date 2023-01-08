import React, { useState } from "react";
import Board from "./components/Board";
import "./style/root.scss";
import Winner from "./components/Winner";
import History from "./components/History";

const app = () => {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isXNext: true },
  ]);

  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];

  const winner = Winner(current.board);

  const message = winner
    ? `Winner is ${winner}`
    : `Next is ${current.isXNext ? "X" : "O"}`;

  const handleSqaureClick = (position) => {
    if (current.board[position] || winner) {
      return;
    }

    setHistory((prev) => {
      const last = prev[prev.length - 1];

      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXNext ? "X" : "O";
        }

        return square;
      });

      return prev.concat({ board: newBoard, isXNext: !last.isXNext });
    });

    setCurrentMove((prev) => prev + 1);
  };

  const moveTo = (move) => {
    setCurrentMove(move);
  };
  return (
    <>
      <div className="app">
        <h1>TICTACTOE</h1>
        <h2>{message}</h2>
        <Board board={current.board} handleSqaureClick={handleSqaureClick} />
        <History history={history} moveTo={moveTo} currentMove={currentMove} />
      </div>
    </>
  );
};
export default app;
