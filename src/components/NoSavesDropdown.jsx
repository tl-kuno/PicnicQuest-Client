import React from "react";

const NoSavesDropdown = () => {
    
    return (
        <div className="nes-select is-dark">
            <select required id="dark_select" defaultValue="">
                <option value="" disabled hidden>Saved Games</option>
                <option value="none" disabled >No available saves</option>
            </select>
        </div >

    )
}

export {
    NoSavesDropdown,
}