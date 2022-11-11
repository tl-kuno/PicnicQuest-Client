import React from "react";

const GameOnDisplay = (props) => {

    return (
        <>
            <SidePanel
                newGameFunction={e => newGame(e)}
                saveFunction={e => saveGame(e)}
                loadFunction={e => loadGame(e)} />
            <div className='nes-container is-dark is-rounded game-display' style={{ padding: "2vw", paddingTop: "3vw" }}>
                <form onSubmit={e => handleClick(e)}>
                    <MainInput
                        onChange={e => setCommand(e.target.value)}
                    />
                </form>
                <InteractionDisplay history={history} />
            </div>
        </>)
}

e