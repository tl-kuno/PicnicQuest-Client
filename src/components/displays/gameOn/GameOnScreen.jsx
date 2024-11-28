import React from "react";
import InteractionDisplay from "./InteractionDisplay";
import MainInput from "../../inputs/MainInput";



const GameOnDisplay = (props) => {

    return (
        <>
            <div className='nes-container is-dark is-rounded game-display'>
                <InteractionDisplay history={props.history} />
                <form onSubmit={props.formSubmit}>
                    <MainInput {...props} />
                </form>
            </div>
        </>)
}

export default GameOnDisplay;
