 import { useState } from "react"
 import Player from "./components/Player"
 import GameBoard from "./components/GameBoard"
 import "./components/styles.css"
 import Log from "./components/Log"
  
function App() { 
  const [gameTurns, setGameTurns] = useState([])
  const [activePlayer, setActivePlayer] = useState('X')

  function handleSelectSquare(rowIndex, colIndex) {
  
      setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X' )
      setGameTurns((prevTurns) => {
          let currentPlayer = 'X'
          if(prevTurns.length > 0 && prevTurns[0].player === 'X'){
            currentPlayer = 'O'
          }
          const updatedTurns = [
            { square: { row: rowIndex, col: colIndex }, player: currentPlayer}, 
            ...prevTurns
          
          ] 
          return updatedTurns;
        } 
      )
    }
  
  return (
   <main>
    <div className="game-container">
      <ol className="player-container highlight-player">
        <Player name="Player 1" symbol="X" isActive={activePlayer==='X'} />
        <Player name="Player 2" symbol="O" isActive={activePlayer==='O'} /> 
      </ol> 

      <GameBoard onSelectSquare={handleSelectSquare}  turns={gameTurns} />
    </div>
    <Log />
   </main>
  )
}

export default App
