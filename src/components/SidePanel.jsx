import React from "react";
import { SidePanelButtons } from "./SidePanelButtons";


const SidePanel = (props) => {

    return (
        <div className="nes-container is-dark is-rounded side-panel">
            <SidePanelButtons {...props} />
        </div>
    )
}

export {
    SidePanel,
}