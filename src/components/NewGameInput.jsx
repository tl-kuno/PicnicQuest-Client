import React from "react";


const NewGameInput = (props) => {

    return (
        <div className="nes-field is-inline font-medium">
            <input  type="text" 
                    id="dark_field" 
                    className="nes-input is-dark" 
                    onChange={props.onChange}
                    pattern={"[A-z][a-z]"}
                    placeholder="enter username"
                    autoComplete="off"
                    autoFocus
            />
        </div>
    )
}

export {
    NewGameInput,
}