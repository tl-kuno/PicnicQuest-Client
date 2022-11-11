import React from "react";
import { NewGameButton } from "./NewGameButton";
import { LoadButton } from "./LoadButton"

const NotPlayingButtons = (props) => {
    return (
        <div className="panel-button-box">
            <div className="panel-button-row">
                <NewGameButton onClick={props.newGameFunction} />
            </div>

            <div className="panel-button-row">
                <LoadButton onClick={props.loadFunction} />
            </div>
        </div>
    )
}

export {
    NotPlayingButtons,
}