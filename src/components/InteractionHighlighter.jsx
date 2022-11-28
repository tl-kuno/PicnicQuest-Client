import React from "react";
import { hightLightInteractionWords } from "../HelperFunctions";

var parse = require('html-react-parser')

const InteractionHighlighter = (props) => {

    const highlightedText = parse(hightLightInteractionWords(props.content, props.loadGames))

    return(
            <p className="interaction-content">{highlightedText}</p>
    )
}


export {
    InteractionHighlighter
}
