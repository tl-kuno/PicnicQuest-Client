import React from "react";
import Interaction from "./Interaction";
import { v4 as uuidv4 } from 'uuid';

const InteractionDisplay = (props) => {

    return (
        <div className="interaction-list">
            {props.history.map((interaction) => (
                <Interaction
                    key={uuidv4()}
                    type={interaction.type}
                    msg={interaction.msg}
                    loadGames={props.loadGames}
                />
            ))}
        </div>
    )
}

export default InteractionDisplay;
