import React from "react";

export default function DisplaySection() {

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth"});
    }

    return (
        <div className="display-section wrapper">
            <h2 className="title">New</h2>
            <p className="text">Brilliant</p>
            <span className="description">A display thats up to 2x the sun...</span>
            <button className="button">Try Me</button>
            <button className="back-button" onClick={handleScrollToTop}>Top</button>
        
        </div>
    );
}