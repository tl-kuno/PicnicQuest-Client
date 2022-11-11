import React from "react";


const ConfirmButton = (props) => {
   
    return (
        <button 
            onClick={props.onClick}
            type="button" 
            className="wide-button nes-btn is-primary">
            OKAY
        </button>
    )
}

export {
    ConfirmButton,
}