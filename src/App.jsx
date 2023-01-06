import React from "react";
import Board from "./components/Board";
import "./style/root.scss";
const app = () => (
  <>
    <div className="app">
      <h1>TICTACTOE</h1>
      <Board />
    </div>
  </>
);

export default app;
