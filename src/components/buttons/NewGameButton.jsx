import React from "react";


const NewGameButton = (props) => {
   
    return (
        <button 
            onClick={props.onClick} 
            type="button" 
            className="wide-button nes-btn is-success">
            NEW
        </button>
    )
}

export {
    NewGameButton,
}