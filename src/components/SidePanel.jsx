import React from "react";
import { SidePanelButtons } from "./SidePanelButtons";


const SidePanel = (props) => {

    return (
        <div className="nes-container is-dark side-panel">
            <SidePanelButtons {...props} />
        </div>
    )
}

/* Module Exports */
export {
    SidePanel,
}