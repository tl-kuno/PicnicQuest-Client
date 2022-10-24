import React from "react";
import { Interaction } from "./Interaction";
import { v4 as uuidv4 } from 'uuid';

const InteractionDisplay = (props) => {

    return (
        <section className="nes-container is-dark">
            <section className="message-list" id="message-body">
                {props.history.map((interaction) => (
                    <Interaction
                        key={uuidv4()}
                        type={interaction.type}
                        content={interaction.content}
                    />
                ))}
            </section>
        </section>
    )
}

/* Module exports */
export {
    InteractionDisplay,
}