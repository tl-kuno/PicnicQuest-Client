import React from "react";


const LoadButton = (props) => {
   
    return (
        <button 
            onClick={props.onClick} 
            type="button" 
            className="nes-btn is-primary skinny-button">
            LOAD
        </button>
    )
}

/* Module Exports */
export {
    LoadButton,
}