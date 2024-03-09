import { useState } from "react"




export default function GameBoard({onSelectSquare, board}) {





    return (
        <ol id="game-board">  
           { board.map((row, rowIndex) => 
                                <li key={rowIndex}>
                                    <ol>   
                                       {row.map((playerSymbol, colIndex)  =>  <li key={`${rowIndex}${colIndex}`}> <button type="button" onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>{ board[rowIndex][colIndex]}</button></li>  ) }
                                    </ol>
                                </li>
                            )
                            
            }
        </ol>
    )

}