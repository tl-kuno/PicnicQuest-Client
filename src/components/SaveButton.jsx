import React from "react";


const SaveButton = (props) => {

    return (
        <button onClick={props.onClick} type="button" className="nes-btn is-success">SAVE</button>
    )
}

/* Module Exports */
export {
    SaveButton,
}