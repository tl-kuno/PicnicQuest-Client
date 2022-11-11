import React from "react";


const LoadButton = (props) => {
   
    return (
        <button 
            onClick={props.onClick} 
            type="button" 
            className="nes-btn is-primary wide-button">
            LOAD
        </button>
    )
}

export {
    LoadButton,
}