import React from "react";
import { InteractionDisplay } from "./InteractionDisplay";
import { MainInput } from "./MainInput";



const GameOnDisplay = (props) => {

    return (
        <>
            <div className='nes-container is-dark is-rounded game-display' style={{ padding: "2vw", paddingTop: "3vw" }}>
                <form onSubmit={props.formSubmit}>
                    <MainInput
                        onChange={props.onChange}
                    />
                </form>
                <InteractionDisplay history={props.history} />
            </div>
        </>)
}

export {
    GameOnDisplay
}