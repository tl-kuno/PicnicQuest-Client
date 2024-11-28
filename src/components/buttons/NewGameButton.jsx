import React from "react";


const NewGameButton = (props) => {
    const { userName, isLoading, onNewGame } = props;
    var className = "wide-button nes-btn is-success"
    if (userName === "" || isLoading) {
        className = "wide-button nes-btn is-disabled"
    }
    return (
        <button
            onClick={onNewGame}
            type="button"
            className={className}>
            NEW
        </button>
    )
}

export default NewGameButton;
