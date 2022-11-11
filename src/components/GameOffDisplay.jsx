import React from "react";


const GameOffDisplay = (props) => {

    return (
        <>
            <div className='nes-container is-dark is-rounded game-display' style={{ padding: "2vw", paddingTop: "3vw" }}>
                <p>{props.displayText}</p>
            </div>
        </>)
}

export {
    GameOffDisplay
}