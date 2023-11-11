import React from 'react'

    function Square({ value, onSquareClick }) {
        return (
          <button className={`w-16 h-16 bg-white border-2 ${value === 'X' ? 'text-red-500' : 'text-blue-500'} border-gray-300 text-2xl font-bold text-center cursor-pointer focus:outline-none hover:bg-gray-100`}
            onClick={onSquareClick}>
            {value}
          </button>
        );
      }

export default Square;  
