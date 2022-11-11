import React from "react";
import { SidePanel } from "./SidePanel";
import { InteractionDisplay } from "./InteractionDisplay";
import { MainInput } from "./MainInput";



const GameOnDisplay = (props) => {

    return (
        <>
            <div className='nes-container is-dark is-rounded game-display' style={{ padding: "2vw", paddingTop: "3vw" }}>
                <form onSubmit={props.formSubmit}>
                    <MainInput
                        onChange={props.inputChange}
                    />
                </form>
                <InteractionDisplay history={props.history} />
            </div>
        </>)
}

export {
    GameOnDisplay
}