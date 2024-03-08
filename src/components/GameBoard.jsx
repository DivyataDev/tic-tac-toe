import { useState } from "react"


const initialBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
]


export default function GameBoard({onSelectSquare, turns}) {

    let gameBoard = initialBoard

    for(const turn of turns) {
        const {square, player} = turn;
        const {row, col} = square;

        gameBoard[row][col] = player;
    }

  /*   const [gameBoard, setGameBoard] = useState(initialBoard)


    function handleSelectSquare(rowIndex, colIndex) {
         

        setGameBoard((prevGameBoard) => {
            const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
 
            updatedGameBoard[rowIndex][colIndex] = playerSymbol

            return updatedGameBoard
        })

        onSelectSquare()

    } */

    return (
        <ol id="game-board"> 
            

            { gameBoard.map((row, rowIndex) => 
                                <li key={rowIndex}>
                                    <ol>   
                                       {row.map((col, colIndex)  =>  <li key={`${rowIndex}${colIndex}`}> <button type="button" onClick={() => onSelectSquare(rowIndex, colIndex)}>{ gameBoard[rowIndex][colIndex]} { /*`${rowIndex}${colIndex}` */}</button></li>  ) }
                                    </ol>
                                </li>
                            )
                            
            }
        </ol>
    )

}