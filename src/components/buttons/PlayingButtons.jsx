import React from "react"
import { SaveButton } from "./SaveButton"
import { QuitGameButton } from "./QuitButton"

const PlayingButtons = (props) => {
    return (
        <div className="panel-button-box">
            <div className="panel-button-row">
                <SaveButton onClick={props.saveFunction} />
            </div>
            <div className="panel-button-row">
                <QuitGameButton onClick={props.quitFunction} />
            </div>
        </div>
    )
}

export {
    PlayingButtons,
}