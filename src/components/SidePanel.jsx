import React from "react";
import { GameStats } from "./GameStats";
import { PlayingButtons } from "./buttons/PlayingButtons";
import { NotPlayingButtons } from "./buttons/NotPlayingButtons";
import logo from "../images/logo.png"


const SidePanel = (props) => {
    return (
        <div className="side-panel nes-container is-dark is-rounded">
                <img src={logo} className="game-off-logo" alt="Picnic-Quest" />
            {props.isPlaying ?
                <div>
                    <GameStats {...props} />
                    <PlayingButtons {...props} />
                </div>
                :
                    <NotPlayingButtons {...props} />
            }
        </div>
    )
}

export {
    SidePanel,
}