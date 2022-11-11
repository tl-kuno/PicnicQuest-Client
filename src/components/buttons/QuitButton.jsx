import React from "react";


const QuitGameButton = (props) => {
   
    return (
        <button 
            onClick={props.onClick} 
            type="button" 
            className="wide-button nes-btn is-error">
            QUIT
        </button>
    )
}

export {
    QuitGameButton,
}