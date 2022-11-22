import React from "react";
import { v4 as uuidv4 } from 'uuid';


const LoadGameDropdown = (props) => {
    
    return (
        <div className="nes-select is-dark">
            <select required id="dark_select" onChange={props.onChange}>
                {props.loadGames.map((loadGame) => (
                    <option 
                    key = { uuidv4() } 
                    value = { loadGame }>
                    { loadGame }
                    </option>
                ))}
        </select>
        </div >

    )
}

export {
    LoadGameDropdown,
}