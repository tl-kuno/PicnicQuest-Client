import React from "react";
import { LoadButton } from "./LoadButton";
import { SaveButton } from "./SaveButton";


const SidePane = (props) => {

    return (
        <div className="nes-container is-dark side-pane">
            <SaveButton onClick={props.saveFunction} />
            <LoadButton onClick={props.loadFunction} />
            <p>{props.confirmation}</p>
        </div>
    )
}

/* Module Exports */
export {
    SidePane,
}