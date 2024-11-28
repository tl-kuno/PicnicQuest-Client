import React, { useState } from 'react';

const MainInput = (props) => {
  const [value, setValue] = useState(props.command);
  const { onUpdateCommand, onSubmitCommand } = props;

  const updateCommand = (e) => {
    const regex = /^[a-zA-Z\s]*$/;

    if (regex.test(e.target.value)) {
      setValue(e.target.value)
      onUpdateCommand(e.target.value)
    }
  }

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      onSubmitCommand(e)
    }
  }


  return (
    <div className="nes-field is-inline nes-inline" >
      <input
        type="text"
        id="main_input"
        name="main_input"
        value={value}
        className="nes-input is-dark"
        placeholder="type a command and press enter..."
        onKeyDown={handleEnter}
        onChange={updateCommand}
        autoComplete="off"
        autoFocus
      />
    </div>
  )
}

export default MainInput;