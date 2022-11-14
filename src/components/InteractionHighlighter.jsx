import React from "react";
import { hightLightInteractionWords } from "../HelperFunctions";

var parse = require('html-react-parser')

const InteractionHighlighter = (props) => {

    const highlightedText = parse(hightLightInteractionWords(props.content))

    return(
            <p className="interaction-content">{highlightedText}</p>
    )
}


export {
    InteractionHighlighter
}
