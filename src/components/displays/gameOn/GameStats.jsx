import React from "react";

const GameStats = (props) => {
    return (
        <>
            <div className="nes-container with-title is-centered is-dark is-rounded game-stats">
                <p className="title">Current Room</p>
                <h2 className="room-word">{props.location}</h2>
            </div>
            <div className="nes-container with-title is-dark is-rounded">
                <p className="title side-panel-label">Sample Commands:</p>
                <p className="sample-command">look</p>
                <p className="font-small">To examine the room</p>
                <p className="sample-command">look at sofa</p>
                <p className="font-small">To examine the sofa</p>
                <p className="sample-command">read letter</p>
                <p className="font-small">To read the letter</p>
                <p className="sample-command">move east</p>
                <p className="font-small">To change locations</p>
                <p className="sample-command">inventory</p>
                <p className="font-small">To view inventory</p>
                <p className="sample-command">help</p>
                <p className="font-small">To see other helpful commands</p>
            </div>
        </>)
}

export default GameStats;
