import React from "react";
import { InteractionHighlighter } from "./InteractionHighlighter";



const Interaction = (props) => {

    const msgClass = ('user'.localeCompare(props.type)) ? 'balloon-container-left' : 'balloon-container-right';
    const balloonClass = ('user'.localeCompare(props.type)) ? 'nes-balloon from-left is-dark bot-text fade-in' : 'nes-balloon from-right is-dark bot-text';
    const pClass = ('user'.localeCompare(props.type)) ? 'bot-interact-text' : 'user-interact-text';
    return (
        <div className="balloon-wrap">
            <div className={msgClass}>
                <div className={balloonClass}>
                    <InteractionHighlighter
                        {...props}
                        className={pClass} />
                </div>
            </div>
        </div>
    )
}

export {
    Interaction,
}