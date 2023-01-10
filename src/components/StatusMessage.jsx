import React from "react";

const StatusMessage = ({ winner, current }) => {
  const noMoveLeft = current.board.every((el) => el !== null);

  return (
    <>
      <h2>
        {winner && (
          <>
            winner is{" "}
            <span className={winner === "X" ? "text-green" : "text-orange"}>
              {winner}
            </span>
          </>
        )}
        {!winner && !noMoveLeft && (
          <>
            Next Player is{" "}
            <span className={current.isXNext ? "text-green" : "text-orange"}>
              {current.isXNext ? "X" : "O"}
            </span>
          </>
        )}
        {!winner && noMoveLeft && (
          <>
            <span className="text-green">X</span> and{" "}
            <span className="text-orange">O</span> tied
          </>
        )}
      </h2>
    </>
  );
};

export default StatusMessage;
