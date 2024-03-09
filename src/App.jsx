 import { useState } from "react"
 import Player from "./components/Player"
 import GameBoard from "./components/GameBoard"
 import "./components/styles.css"
 import Log from "./components/Log"
 import { WINNING_COMBINATIONS } from "./components/winning-combinations"


 const initialBoard = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
]



function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X'

  if(gameTurns.length > 0  && gameTurns[0].player === 'X'){
    currentPlayer = 'O'
  }
  return currentPlayer 

}
  
function App() { 
  const [gameTurns, setGameTurns] = useState([]) 

  const activePlayer = deriveActivePlayer(gameTurns)

  function handleSelectSquare(rowIndex, colIndex) { 
      setGameTurns((prevTurns) => { 
          let currentPlayer = deriveActivePlayer(prevTurns)
          const updatedTurns = [
            { square: { row: rowIndex, col: colIndex }, player: currentPlayer}, 
            ...prevTurns
          
          ] 
          return updatedTurns;
        } 
      )
    }


  let gameBoard = initialBoard

  for(const turn of gameTurns) {
      const {square, player} = turn;
      const {row, col} = square;

      gameBoard[row][col] = player;
  }

  let winner = null
  for(const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

    if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){
      winner = firstSquareSymbol
    }
  }




  
  return (
   <main>
    <div className="game-container">
      <ol className="player-container highlight-player">
        <Player name="Player 1" symbol="X" isActive={activePlayer==='X'} />
        <Player name="Player 2" symbol="O" isActive={activePlayer==='O'} /> 
      </ol> 
      {winner &&   `You won, ${winner}`}
      <GameBoard onSelectSquare={handleSelectSquare}  board={gameBoard} />
    </div>
    <Log turns={gameTurns}  />
   </main>
  )
}

export default App
