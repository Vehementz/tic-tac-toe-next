import Square from "./Square";
import calculateWinner from "../utils/calculateWinner";

function Board({ xIsNext, squares, onPlay }) {
    function handleClick(i) {
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      const nextSquares = squares.slice();
      if (xIsNext) {
        nextSquares[i] = 'X';
      } else {
        nextSquares[i] = 'O';
      }
      onPlay(nextSquares);
    }
  
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }
  
    return (
      <>
        <div className="text-lg font-semibold mt-4 mb-8 m-auto text-center tracking-wider">{status}</div>
        <div className="grid grid-cols-3 w-[16rem] m-auto gap-2 text-center">
          {squares.map((square, i) => (
            <Square key={i} value={square} onSquareClick={() => handleClick(i)} />
          ))}
        </div>
      </>
    );
  }
  

  export default Board;