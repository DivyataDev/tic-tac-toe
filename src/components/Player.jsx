import { useState } from "react"


export default function Player({name, symbol, isActive, onChangeName}) {

    const [isEditing, setIsEditing] = useState(false)
    const [playerName, setPlayerName] = useState(name)

    function handlePlayerNameEdit() {
        setIsEditing(editing => !editing)

        if(isEditing){ 
            onChangeName(symbol,playerName)
        }



    }

    function handleChangePlayerName(event) { 
        setPlayerName(event.target.value)
    }



    return (
        <li className={isActive ? 'active': null}>
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