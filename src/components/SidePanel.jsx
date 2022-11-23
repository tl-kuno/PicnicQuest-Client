import React from "react";
import { GameStats } from "./GameStats";
import { PlayingButtons } from "./buttons/PlayingButtons";
import { NotPlayingButtons } from "./buttons/NotPlayingButtons";
import logo from "../images/logo.png"


const SidePanel = (props) => {
    return (
        <div className="side-panel">
            <div className='nes-container is-dark is-rounded' >
                <img src={logo} className="game-off-logo" alt="Junimo the cat" />
            </div>
            {props.isPlaying ?
                <div>
                    <GameStats {...props} />
                    <PlayingButtons {...props} />
                </div>
                :
                    <NotPlayingButtons {...props} />
            }
            <div className='nes-container is-dark is-rounded' >
                <p>created by: <br /><mark className='purple-word'>Alex Meyers</mark>,<br /> <mark className='green-word'>Armon Tavakoulnia</mark>, &<br /> <mark className='pink-word'>Taylor Kuno</mark></p>
            </div>
        </div>
    )
}

export {
    SidePanel,
}