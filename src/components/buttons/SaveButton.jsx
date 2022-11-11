import React from "react";


const SaveButton = (props) => {

    return (
        <button 
            onClick={props.onClick} 
            type="button" 
            className="nes-btn is-primary skinny-button">
            SAVE
        </button>
    )
}

export {
    SaveButton,
}