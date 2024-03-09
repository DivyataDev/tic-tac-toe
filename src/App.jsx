 import { useState } from "react"
 import Player from "./components/Player"
 import GameBoard from "./components/GameBoard"
 import "./components/styles.css"
 import Log from "./components/Log"
 import { WINNING_COMBINATIONS } from "./components/winning-combinations"
 import GameOver from "./components/GameOver"

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
  const [players, setPlayers] = useState({
    'X': 'Player 1',
    'O': 'Player 2'
  }

  )

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


  let gameBoard = [...initialBoard.map(array => [...array])]

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
      winner = players[firstSquareSymbol]
    }
  }

  const hasdraw = gameTurns.length === 9 && ! winner
 

  function handleRematch() {
    setGameTurns([])
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers(prevPlayers => {
        return {
            ...prevPlayers,
            [symbol] : newName
        }
    })
  }
  
  return (
   <main>
    <div className="game-container">
      <ol className="player-container highlight-player">
        <Player name="Player 1" symbol="X" isActive={activePlayer==='X'} onChangeName={handlePlayerNameChange} />
        <Player name="Player 2" symbol="O" isActive={activePlayer==='O'} onChangeName={handlePlayerNameChange} /> 
      </ol> 
      {(winner || hasdraw) && <GameOver winner={winner} rematch={handleRematch} />}
      <GameBoard onSelectSquare={handleSelectSquare}  board={gameBoard} />
    </div>
    <Log turns={gameTurns}  />
   </main>
  )
}

export default App
