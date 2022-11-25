import React from "react";
import { InteractionDisplay } from "./InteractionDisplay";
import { MainInput } from "./MainInput";



const GameOnDisplay = (props) => {

    return (
        <>
            <div className='nes-container is-dark is-rounded game-display' style={{ padding: "2vw", paddingTop: "3vw" }}>
                <InteractionDisplay history={props.history} />
                <form onSubmit={props.formSubmit}>
                    <MainInput
                        onChange={props.onChange}
                    />
                </form>
            </div>
        </>)
}

export {
    GameOnDisplay
}