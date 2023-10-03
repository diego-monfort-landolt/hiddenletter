

const creatCell = (row, col, letter) => {
  return {
    row: row,
    col: col,
    isHidden: false,
    letter: letter,
  }
}

export default creatCell