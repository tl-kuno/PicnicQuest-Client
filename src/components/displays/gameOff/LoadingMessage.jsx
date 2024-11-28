import React, { useState, useEffect } from "react";


const LoadingMessage = () => {
    const [ellipsis, setProgress] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress === "...") return "";
                return `${prevProgress}.`;
            });
        }, 450);

        // Cleanup interval on unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="nes-field is-inline loading-msg">
            <span className="nes-text sticky">Loading</span>
            <span className="nes-text">{ellipsis}</span>
        </div>
    )
}

export default LoadingMessage;


