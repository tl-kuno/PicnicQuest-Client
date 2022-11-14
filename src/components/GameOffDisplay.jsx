import React from "react";
import junimo from "../images/junimo1.png"
import { hightLightIntroductionWords } from "../HelperFunctions";
var parse = require('html-react-parser')

const GameOffDisplay = (props) => {

    var highlightedText = parse(hightLightIntroductionWords(props.displayText))

    return (
        <>
            <div className='nes-container is-dark is-rounded game-display game-off' style={{ padding: "2vw", paddingTop: "3vw" }}>
                <div>
                    <img src={junimo} className="junimo-game-off"/>
                </div>
                <div className='nes-balloon from-right is-dark game-off-text' style={{marginLeft:"auto", marginRight:"8vw", textAlign:"center"}}>
                    <p>{highlightedText}</p>
                </div>
            </div>
        </>)
}

export {
    GameOffDisplay
}