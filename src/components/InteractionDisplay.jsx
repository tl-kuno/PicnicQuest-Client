import { React, useEffect, useRef } from "react";
import { Interaction } from "./Interaction";
import { v4 as uuidv4 } from 'uuid';

const InteractionDisplay = (props) => {


    return (
        <div className="nes-container is-dark" mode="bottom">
            <div className="message-list" id="message-body">
                {props.history.map((interaction) => (
                    <Interaction
                        key={uuidv4()}
                        type={interaction.type}
                        content={interaction.content} />
                ))}
            </div>
        </div>
    )
}

/* Module exports */
export {
    InteractionDisplay,
}