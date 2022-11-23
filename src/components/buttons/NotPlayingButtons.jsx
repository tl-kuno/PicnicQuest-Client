import React from "react";
import { NewGameButton } from "./NewGameButton";
import { LoadButton } from "./LoadButton"
import { NewGameInput } from "../NewGameInput";
import { LoadGameDropdown } from "../LoadGameDropDown";
import { NoSavesDropdown } from "../NoSavesDropdown";


const NotPlayingButtons = (props) => {
    var availableSaves = true;
    if ((props.loadGames).length === 0) {
        availableSaves = false;
    } 
    return (
        <>
        <div className="panel-button-box nes-container is-dark is-rounded">
            <div className="panel-button-row">
                <NewGameInput onChange={props.onUsernameChange}/>
            </div>
            <div className="panel-button-row">
                <NewGameButton onClick={props.newGameFunction} userName={props.userName}/>
            </div>
        </div>
                <div className="panel-button-box nes-container is-dark is-rounded">
                <div className="panel-button-row">
                    {availableSaves ?
                    <LoadGameDropdown loadGames={props.loadGames} onChange={props.onLoadRequestChange} loadRequest={props.loadRequest}/>
                    :
                    <NoSavesDropdown />
                    }
                </div>
                <div className="panel-button-row">
                    <LoadButton onClick={props.loadFunction} loadGames={props.loadGames}/>
                </div>
            </div>
        </>
    )
}

export {
    NotPlayingButtons,
}