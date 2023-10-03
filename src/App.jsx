import { React, useState, useEffect } from 'react';
import { CreateBoard } from './utils/createBoard';
import './App.css'
import Cell from './components/Cell';

function App() {
  const [board, setBoard] = useState(() => CreateBoard());
  const [gamesToWin, setGamesToWin] = useState(3);
  const [timer, setTimer] = useState(0);
  const miliseconds = (timer / 10).toFixed(2)

  useEffect(() => {
    if (gamesToWin > 0) {
      const interval = setInterval(() => {
        setTimer(timer + 1)
      }, 100)
      return () => clearInterval(interval)
    }

  }, [gamesToWin, timer]);



  function handleClick(row, col) {

    if (board[row][col].isHidden) {

      setGamesToWin(gamesToWin - 1);

      setTimeout(() => {
        setBoard(CreateBoard())
      }, 500);
      setBoard(CreateBoard());
    }
  }


  return (
    <>
      <div className='app'>
        <h1><span className='span-title'>D</span>iego<span className='span-title'>D</span>ev</h1>
        {gamesToWin > 0 && <h2>Time: {miliseconds}</h2>}




        {gamesToWin === 0 ? (
          <h2>¡ Congratulations ! Your time was: {miliseconds}</h2>
        ) : (
          <p>Games To Win: {gamesToWin}</p>
        )}


        {gamesToWin > 0 && <div> {board.map((row, rowIdx) => (
          <div key={rowIdx} className='row' >{row.map((letter, letterIdx) => (
            <Cell key={letterIdx} handleClick={handleClick} {...letter} />
          ))}</div>

        ))}

        </div>}





      </div>

    </>
  )
}

export default App
