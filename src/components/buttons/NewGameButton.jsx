import React from "react";


const NewGameButton = (props) => {
    var className = "wide-button nes-btn is-success"
    if (props.userName === "") {
        className = "wide-button nes-btn is-disabled"
    }
    return (
        <button
            onClick={props.onClick}
            type="button"
            className={className}>
            NEW
        </button>
    )
}

export default NewGameButton;
