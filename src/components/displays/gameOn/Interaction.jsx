import React from "react";
import parse from "html-react-parser";

import { hightLightInteractionWords } from "../../../InteractionFormatter";


const Interaction = (props) => {

    const isMsgFromUser = props.type === 'junimo';

    const msgClass = isMsgFromUser ? 'balloon-container-left' : 'balloon-container-right';
    const balloonClass = isMsgFromUser ? 'nes-balloon from-left is-dark bot-text fade-in' : 'nes-balloon from-right is-dark bot-text';
    const pIdentityClass = isMsgFromUser ? 'bot-interact-text' : 'user-interact-text';
    const pClass = `interaction-content ${pIdentityClass}`

    const formattedText = parse(hightLightInteractionWords(props.msg))

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