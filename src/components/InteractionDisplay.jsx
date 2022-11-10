import { React } from "react";
import { Interaction } from "./Interaction";
import { v4 as uuidv4 } from 'uuid';
import ScrollToBottom from "react-scroll-to-bottom";

const InteractionDisplay = (props) => {

    return (
        <div className="nes-container is-dark" mode="bottom">
            <ScrollToBottom scrollViewClassName="message-list" className="message-list" id="message-body">
                {props.history.map((interaction) => (
                    <Interaction 
                        key={uuidv4()}
                        type={interaction.type}
                        content={interaction.content} />
                ))}
            </ScrollToBottom>
        </div>
    )
}

/* Module exports */
export {
    InteractionDisplay,
}