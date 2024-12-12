import { useState } from "react";
import Cell from "./components/cell";
function App() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function checkWinner(cells) {
    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        return cells[a];
      }
    }
    return null;
  }

  function handleCellClick(id) {
    if (cells[id] === "" && !winner) {
      setCells((prevCells) => {
        const newCells = [...prevCells];
        newCells[id] = currentPlayer;

        const newWinner = checkWinner(newCells);
        if (newWinner) {
          setWinner(newWinner);
        } else if (!newCells.includes("")) {
          setWinner("Draw");
        }

        return newCells;
      });

      setCurrentPlayer((prev) => (prev === "X" ? "O" : "X"));
    }
  }

  function resetGame() {
    setCells(["", "", "", "", "", "", "", "", ""]);
    setWinner(null);
    setCurrentPlayer("X");
  }

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-900 to-gray-700 text-white ">
      <div
        className={`w-[90%] md:w-[30%] aspect-square bg-gradient-to-r from-blue-600 to-purple-600 border-[8px] border-white flex flex-wrap shadow-xl ${
          winner ? "opacity-70" : ""
        }`}
      >
        {cells.map((cell, index) => (
          <Cell
            key={index}
            id={index}
            cell={cell}
            setCells={handleCellClick}
            currentPlayer={currentPlayer}
          />
        ))}
      </div>

      <div className="mt-4 text-2xl font-bold text-center">
        {winner
          ? winner === "Draw"
            ? "It's a Draw!"
            : `🎉 Winner: ${winner}!`
          : `Current Player: ${currentPlayer}`}
      </div>

      <button
        onClick={resetGame}
        className="mt-6 px-6 py-3 bg-green-600 text-white text-lg font-bold rounded-lg shadow-lg hover:bg-green-500 hover:scale-105 transition-transform"
      >
        Reset Game
      </button>

      <div className="text-white font-bold italic mt-3 text-center hover:text-yellow-400 transition-all duration-300">
        Development by{" "}
        <span className="text-blue-400  ">Fady Maher</span>
      </div>
    </main>
  );
}


export default App;
