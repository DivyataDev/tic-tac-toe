import { useState } from "react"


export default function Player({name, symbol}) {

    const [isEditing, setIsEditing] = useState(false)
    const [playerName, setPlayerName] = useState(name)

    function handlePlayerNameEdit() {
        setIsEditing(editing => !editing)


    }

    function handleChangePlayerName(event) {
     //   console.log(event)
        setPlayerName(event.target.value)
    }



    return (
        <li>
            <span className='player'>
            {
                isEditing ? <input type="text" value={playerName} onChange={handleChangePlayerName} /> :  <span className='player-name'>{playerName}</span> 
            }

           
            <span className='player-symbol'>{symbol}</span> 
            </span>
            <button onClick={handlePlayerNameEdit}> {
                isEditing ? 'Save': 'Edit'}</button>
        </li>
    )
}