 import Player from "./components/Player"
 import GameBoard from "./components/GameBoard"
 import "./components/styles.css"
  
function App() { 
  
  return (
   <main>
    <div className="game-container">
      <ol className="player-container">
        <Player name="Player 1" symbol="X" />
        <Player name="Player 2" symbol="O" /> 
      </ol> 

      <GameBoard />
    </div>
    Log
   </main>
  )
}

export default App
