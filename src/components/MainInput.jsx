import React from 'react';

const MainInput= (props) => {

    return(
        <div className="nes-field is-inline nes-inline">
        <input 
          type="text"
          id="main_input"
          name="main_input"
          className="nes-input is-dark"
          placeholder="What next?"
          value={props.command}
          onChange={props.onChange}
          autoComplete="off"
          autoFocus
        />
      </div>
    )
}

/* Module Exports */
export {
    MainInput,
}
