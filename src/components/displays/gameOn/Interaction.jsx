import React from "react";
import parse from "html-react-parser";

import { hightLightInteractionWords } from "../../../InteractionFormatter";


const Interaction = (props) => {

    const msgClass = ('user'.localeCompare(props.type)) ? 'balloon-container-left' : 'balloon-container-right';
    const balloonClass = ('user'.localeCompare(props.type)) ? 'nes-balloon from-left is-dark bot-text fade-in' : 'nes-balloon from-right is-dark bot-text';
    const pIdentityClass = ('user'.localeCompare(props.type)) ? 'bot-interact-text' : 'user-interact-text';
    const pClass = `interaction-content ${pIdentityClass}`

    const formattedText = parse(hightLightInteractionWords(props.content))

    return (
        <div className="balloon-wrap">
            <div className={msgClass}>
                <div className={balloonClass}>
                    <p className={pClass}>{formattedText}</p>

                </div>
            </div>
        </div>
    )
}

export default Interaction;