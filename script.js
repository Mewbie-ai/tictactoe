const TicTacToe = () => {
  let boardArray = ['','','','','','','','','']
  let turn = 'x'
  let nodes = document.querySelectorAll('.node')
  let win = document.getElementById('win')
  nodes.forEach((node,i) => {
    node.addEventListener('click', () => {
      if(node.textContent != '') return
      updateBoardArray(i)
      node.textContent = turn
      switchTurn()
      findWinner()
    })
  })
  const switchTurn = () => (turn == 'x') ? turn = 'o' : turn = 'x'
  const updateBoardArray = (index) => boardArray[index] = turn
  const resetBoard = () => {
    setTimeout(() => {
      boardArray = ['','','','','','','','','']
      nodes.forEach(node=>node.textContent='')
      win.textContent = ''
    }, 1000)
  }
  const findWinner = () => {
    if(boardArray[0] === boardArray[1] && boardArray[1] === boardArray[2] && boardArray[2] === boardArray[0] && boardArray[0] != '' ||
      boardArray[3] === boardArray[4] && boardArray[4] === boardArray[5] && boardArray[5] === boardArray[3] && boardArray[3] != '' ||
      boardArray[6] === boardArray[7] && boardArray[7] === boardArray[8] && boardArray[8] === boardArray[6] && boardArray[6] != '' ||
      boardArray[0] === boardArray[3] && boardArray[3] === boardArray[6] && boardArray[6] === boardArray[0] && boardArray[0] != '' ||
      boardArray[1] === boardArray[4] && boardArray[4] === boardArray[7] && boardArray[7] === boardArray[1] && boardArray[1] != '' ||
      boardArray[2] === boardArray[5] && boardArray[5] === boardArray[8] && boardArray[8] === boardArray[2] && boardArray[2] != '' ||
      boardArray[0] === boardArray[4] && boardArray[4] === boardArray[8] && boardArray[8] === boardArray[0] && boardArray[0] != '' ||
      boardArray[2] === boardArray[4] && boardArray[4] === boardArray[6] && boardArray[6] === boardArray[2] && boardArray[2] != '' 
    ){
      switchTurn()
      win.textContent = turn + ' win'
      resetBoard()
    }else if(boardArray[0] && boardArray[1] && boardArray[2] && boardArray[3] && boardArray[4] && boardArray[5] && boardArray[6] && boardArray[7] &&  boardArray[8] != ''){
      win.textContent = 'tied'
      resetBoard()
    }
  }
}

TicTacToe()