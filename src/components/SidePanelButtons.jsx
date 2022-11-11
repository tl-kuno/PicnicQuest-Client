import React from "react";
import { LoadButton } from "./buttons/LoadButton";
import { SaveButton } from "./buttons/SaveButton";
import { NewGameButton } from "./buttons/NewGameButton";
import { QuitGameButton } from "./buttons/QuitButton";

const SidePanelButtons = (props) => {

    return (
        <div className="panel-button-box">
            <div className="panel-button-row">
                <NewGameButton onClick={props.newGameFunction} />
            </div>
            <div className="panel-button-row">
                <LoadButton onClick={props.loadFunction} />
                <SaveButton onClick={props.saveFunction} />
            </div>
            <div className="panel-button-row">
                <QuitGameButton onClick={props.quitGameFunction} />
            </div>
        </div>
    )
}

export {
    SidePanelButtons,
}