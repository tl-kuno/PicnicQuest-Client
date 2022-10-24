import React from "react";

const Interaction = (props) => {
    const msgClass = ('user'.localeCompare(props.type)) ? 'message -left' : 'message -right';
    const balloonClass = ('user'.localeCompare(props.type)) ? 'nes-balloon from-left is-dark bot-text' : 'nes-balloon from-right is-dark bot-text';
return (
    <section className={msgClass}>
        <div className={balloonClass}>
            <p>{props.content}</p>
        </div>
    </section>
)
}

/* Module Exports */
export {
    Interaction,
}