import React from "react";


const QuitGameButton = (props) => {
   
    return (
        <button 
            onClick={props.quitFunction} 
            type="button" 
            className="wide-button nes-btn is-error">
            QUIT
        </button>
    )
}

export {
    QuitGameButton,
}