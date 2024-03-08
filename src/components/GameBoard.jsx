import { useState } from "react"


const initialBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
]


export default function GameBoard() {
    const [gameBoard, setGameBoard] = useState(initialBoard)


    function handleSelectSquare(rowIndex, colIndex) {
         

        setGameBoard((prevGameBoard) => {
            const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
 
            updatedGameBoard[rowIndex][colIndex] = 'X'
            return updatedGameBoard
        })

    }

    return (
        <ol id="game-board"> 
            

            { gameBoard.map((row, rowIndex) => 
                                <li key={rowIndex}>
                                    <ol>   
                                       {row.map((col, colIndex)  =>  <li key={`${rowIndex}${colIndex}`}> <button type="button" onClick={() => handleSelectSquare(rowIndex, colIndex)}>{ gameBoard[rowIndex][colIndex]} { /*`${rowIndex}${colIndex}` */}</button></li>  ) }
                                    </ol>
                                </li>
                            )
                            
            }
        </ol>
    )

}