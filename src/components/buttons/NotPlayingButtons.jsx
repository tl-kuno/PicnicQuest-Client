import React from "react";
import NewGameButton from "./NewGameButton";
import NewGameInput from '../inputs/NewGameInput.jsx';

const NotPlayingButtons = (props) => {
    return (
        <>
            <div className="panel-button-box">
                <div className="panel-button-row">
                    <NewGameInput {...props} />
                </div>
                <div className="panel-button-row">
                    <NewGameButton {...props} />
                </div>
            </div>
        </>
    )
}

export default NotPlayingButtons;