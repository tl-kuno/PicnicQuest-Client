import React from "react";
import junimo from "../images/junimo1.png"
import { hightLightIntroductionWords } from "../HelperFunctions";
var parse = require('html-react-parser')

const GameOffDisplay = (props) => {

    const highlightedText = parse(hightLightIntroductionWords(props.offMsg))

    return (
        <>
            <div className='nes-container is-dark is-rounded game-display game-off' style={{ padding: "2vw", paddingTop: "3vw" }}>
                <div><img src={junimo} className="game-off-junimo" alt="Junimo the cat"/></div>
                <div className='nes-balloon from-right is-dark game-off-text'>{highlightedText}</div>
            </div>
        </>)
}

export {
    GameOffDisplay
}
