import React from "react";

export default function DisplaySection({ triggerPreview }) {

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }

    return (
        <div className="display-section wrapper">
            <h2 className="title">New</h2>
            <p className="text">NVIDIA DLSS 3</p>
            <span className="description">The Performance Multiplier, Powered by AI</span>
            <button className="button" onClick={triggerPreview}>Rotate Me</button>
            <button className="back-button" onClick={handleScrollToTop}>Back to Top</button>

        </div>
    );
}