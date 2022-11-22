import React from "react";


const LoadButton = (props) => {
    var className = "wide-button nes-btn is-primary"
    if (props.loadGames.length === 0) {
       className = "wide-button nes-btn is-disabled"
    }

    return (
        <button 
            onClick={props.onClick} 
            type="button" 
            className={className}>
            LOAD
        </button>
    )
}

export {
    LoadButton,
}