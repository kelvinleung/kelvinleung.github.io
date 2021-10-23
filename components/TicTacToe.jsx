import { useState } from "react";

const squareStyle = {
  fontSize: "24px",
  cursor: "pointer",
  border: "none",
  backgroudColor: "#fafafa",
};

const Square = ({ value, onClick }) => (
  <button style={squareStyle} onClick={onClick}>
    {value}
  </button>
);

const boardStyle = {
  width: "250px",
  height: "250px",
  display: "grid",
  gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
  gap: "4px",
  borderRadius: "16px",
  overflow: "hidden",
};

const Board = ({ squares, onClick }) => (
  <div style={boardStyle}>
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);

const gameStyle = {
  margin: "32px 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "8px",
};

const resetButtonStyle = {
  padding: "8px 16px",
  fontSize: "14px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
};

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
    <div style={gameStyle}>
      <Board squares={board} onClick={(i) => handleClick(i)} />
      <p>
        {winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O")}
      </p>
      <button style={resetButtonStyle} onClick={reset}>
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
