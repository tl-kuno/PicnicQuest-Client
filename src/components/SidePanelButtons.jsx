import React from "react";
import { PlayingButtons } from "./buttons/PlayingButtons";
import { NotPlayingButtons } from "./buttons/NotPlayingButtons";

const SidePanelButtons = (props) => {

    return (
        <>
            { props.isPlaying ? 
                <PlayingButtons {...props}/> 
                : 
                <NotPlayingButtons {...props}/>
            }
        </>
    )
}

export {
    SidePanelButtons,
}