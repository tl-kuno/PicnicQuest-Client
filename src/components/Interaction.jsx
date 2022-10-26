import React from "react";


const Interaction = (props) => {
    const msgClass = ('user'.localeCompare(props.type)) ? 'message -left' : 'message -right';
    const balloonClass = ('user'.localeCompare(props.type)) ? 'nes-balloon from-left is-dark bot-text fade-in' : 'nes-balloon from-right is-dark bot-text';
return (
    <div className={msgClass}>
        <div className={balloonClass}>
            <p className={"interact-text"}>{props.content}</p>
        </div>
    </div>
)
}

/* Module Exports */
export {
    Interaction,
}