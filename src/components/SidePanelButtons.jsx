import React from "react";
import { LoadButton } from "./buttons/LoadButton";
import { SaveButton } from "./buttons/SaveButton";
import { NewGameButton } from "./buttons/NewGameButton";


const SidePanelButtons = (props) => {

    return (
        <div className="panel-buttons">
            <NewGameButton onClick={props.newGameFunction} />
            <LoadButton onClick={props.loadFunction} />
            <SaveButton onClick={props.saveFunction} />
        </div>
    )
}

/* Module Exports */
export {
    SidePanelButtons,
}