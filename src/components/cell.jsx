function Cell({ id, cell, setCells }) {
    return (
      <div
        className={`w-[33.33%] h-[33.33%] border-[2px] border-gray-400 box-border flex items-center justify-center text-4xl font-extrabold ${
          cell === "X"
            ? "text-blue-300  "
            : cell === "O"
            ? "text-red-300  "
            : "hover:bg-blue-600 hover:scale-105 transition-transform"
        }`}
        onClick={() => setCells(id)}
      >
        {cell}
      </div>
    );
  }
  
  export default Cell;
  