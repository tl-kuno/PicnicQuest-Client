import React from "react"
import QuitButton from './QuitButton'

const PlayingButtons = (props) => {
    return (
        <div className="nes-container is-dark is-rounded">
            <div className="panel-button-row">
                <QuitButton onClick={props.quitFunction} />
            </div>
        </div>
    )
}

export default PlayingButtons;
