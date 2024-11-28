import React from "react";
import GameStats from "./gameOn/GameStats.jsx";
import PlayingButtons from "../buttons/PlayingButtons";
import NotPlayingButtons from "../buttons/NotPlayingButtons";
import logo from "../../resources/logo.png";


const SidePanel = (props) => {
    return (
        <div className="side-panel nes-container is-dark is-rounded">
            <img src={logo} className="game-logo" alt="Picnic-Quest" />
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

export default SidePanel;
