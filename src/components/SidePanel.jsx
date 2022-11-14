import React from "react";
import { GameStats } from "./GameStats";
import { PlayingButtons } from "./buttons/PlayingButtons";
import { NotPlayingButtons } from "./buttons/NotPlayingButtons";

const SidePanel = (props) => {

    return (
        <div className="side-panel">
        <>
            { props.isPlaying ? 
            <div>
                <GameStats />
                <PlayingButtons {...props}/> 
            </div>
                : 
                <NotPlayingButtons {...props}/>
            }
        </>
        </div>
    )
}

export {
    SidePanel,
}