import React, { useState } from 'react';
import styles from './Game.module.css'
 
function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [next, setnext] = useState(true);

    // sets newboard and next player

  const handleClick = (index) => {
    const newBoard = [...board];
    // console.log(newBoard)
    // check is cliked cell is filled or not if it is filled then it return or check anyone win or not if win then it return and stop next code execution

    if (newBoard[index] || calculateWinner(newBoard)) {
      return;
    }
    newBoard[index] = next ? 'X' : 'O';
    setBoard(newBoard);
    setnext(!next);
  };

//   Calculates winner

  const calculateWinner = (squares) => {
    // All winning combinations
    const lines = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

 // Restarts the game  

  const handlerestart=()=>{
    setBoard(Array(9).fill(null))
    setnext(true)
  }

 //Checks who is winner

  const winner = calculateWinner(board);

  //sets status if calculateWinner return winner then it show winner else shows next palyer

  const status = winner ? `Congratulations! Winner is player ${winner}.` : `Current player : ${next ? 'X' : 'O'}`;

  
  return (
<div className={styles.maincontainer}>
      <h1>Tic Tac Toe</h1>
      <div className={styles.board}>
        {board.map((cell, index) => (
          <div style={{color :board[index]==='X'?'red' : 'blue'}} className={styles.cell} key={index} onClick={() => handleClick(index)}>
            {cell}
          </div>
        ))}
      </div>
      <br/>
      <b className={styles.status}>{status}</b><br/><br/>
      <button className={styles.restart} onClick={handlerestart}>
        Restart Game
      </button>
    </div>
  );
}

export default Game;
