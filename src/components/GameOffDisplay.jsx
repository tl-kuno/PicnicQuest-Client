import React from "react";
import junimo from "../images/junimo1.png"
import { hightLightIntroductionWords } from "../HelperFunctions";
var parse = require('html-react-parser')

const GameOffDisplay = (props) => {

    const highlightedText = parse(hightLightIntroductionWords(props.offMsg))

    return (
        <>
            <div className='nes-container is-dark is-rounded game-display game-off'>
                <div className='nes-balloon from-right is-dark game-off-text'>{highlightedText}</div>
                <div><img src={junimo} className="game-off-junimo" alt="Junimo the cat"/></div>
            </div>
        </>)
}

export {
    GameOffDisplay
}
