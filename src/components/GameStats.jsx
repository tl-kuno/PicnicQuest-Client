import React from "react";

const GameStats = (props) => {
    return (
        <>
            <div className="nes-container with-title is-centered is-dark is-rounded">
                <p className="title">Currrent Room</p>
                <h2 className="room-word">{props.location}</h2>
            </div>
            <div className="nes-container with-title is-dark is-rounded font-small">
                <p className="title">Sample Commands:</p>
                <p className="sample-command">look</p>
                <p className="font-small">To look around the living room</p>
                <p className="sample-command">look at sofa</p>
                <p className="font-small">To examine the sofa</p>
                <p className="sample-command">read letter</p>
                <p className="font-small">To read the letter</p>
                <p className="sample-command">move east</p>
                <p className="font-small">To move to a different room</p>
                <p className="sample-command">inventory</p>
                <p className="font-small">To look at your inventory</p>
                <p className="sample-command">help</p>
                <p className="font-small">To see a list of other helpful command</p>
            </div>
        </>)
}

export {
    GameStats,
}