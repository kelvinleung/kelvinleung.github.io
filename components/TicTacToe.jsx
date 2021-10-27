import { useState } from "react";
import style from "./TicTacToe.module.scss";

const Square = ({ value, onClick }) => (
  <button className={style.square} onClick={onClick}>
    {value}
  </button>
);

const Board = ({ squares, onClick }) => (
  <div className={style.board}>
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const tempBoard = [...board];
    if (winner || tempBoard[i]) return;
    tempBoard[i] = xIsNext ? "X" : "O";
    setBoard(tempBoard);
    setXIsNext(!xIsNext);
  };

  const reset = () => setBoard(Array(9).fill(null));

  return (
    <div className={style.game}>
      <Board squares={board} onClick={(i) => handleClick(i)} />
      <p>
        {winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O")}
      </p>
      <button className={style.resetButton} onClick={reset}>
        重新开始
      </button>
    </div>
  );
};

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default TicTacToe;
