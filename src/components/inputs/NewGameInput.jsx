import React, { useState } from "react";


const NewGameInput = (props) => {
    const [value, setValue] = useState(props.userName);
    const { onUpdateUserName, onSubmitCommand } = props;

    function updateUserName(e) {
        const regex = /^[a-zA-Z\s.,!?]*$/;
        if (regex.test(e.target.value)) {
            setValue(e.target.value)
            onUpdateUserName(e.target.value)
        }
    }

    function submitCommand(e) {
        onSubmitCommand(value)
    }

    return (
        <div className="nes-field is-inline">
            <input type="text"
                id="dark_field"
                className="nes-input is-dark"
                value={value}
                onChange={updateUserName}
                onSubmit={submitCommand}
                pattern={"[A-z][a-z]"}
                placeholder="username"
                autoComplete="off"
                autoFocus
            />
        </div>
    )
}

export default NewGameInput;
