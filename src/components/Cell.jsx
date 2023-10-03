import { React, useState } from "react";

const Cell = ({ row, col, isHidden, letter, handleClick }) => {
const [hasWon, setHasWon] = useState(false)
const [incorrect, setIncorrect] = useState(false)

 function handleCell() {
  if (isHidden) {
    setHasWon(true);
    setTimeout(() => {
      setHasWon(false)
    }, 500)

  } else {
    setIncorrect(true);
    setTimeout(() => {
      setIncorrect(false)
    }, 500);

  }
  handleClick(row, col)
 }

  return (
  <div onClick={ handleCell } className={hasWon ? "hasWonLetter cell" : incorrect ? "incorrect cell" : "cell"}>{letter}</div>
  
  )
   
  
};

export default Cell;
