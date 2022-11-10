import React from "react";
import { hightLightWords } from "../HelperFunctions";

var parse = require('html-react-parser')

const InteractionHighlighter = (props) => {

    const highlightedText = parse(hightLightWords(props.content))

    return(
            <p className="interaction-content">{highlightedText}</p>
    )
}


/* Module Exports */
export {
    InteractionHighlighter
}
