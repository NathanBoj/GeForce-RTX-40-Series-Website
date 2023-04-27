import React from "react";

export default function SoundSection() {

    const handleLearnMore = () => {
        const element = document.querySelector(".display-section");
        window.scrollTo({
            top: element.getBoundingClientRect().bottom,
            left: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className="sound-section wrapper">
            <div className="body">
                <div className="sound-section-content content">
                    <h2 className="title">NVIDIA Ada Lovelace Architecture</h2>
                    <p className="text">Ahead of its Time, <br></br>Ahead of the Game</p>
                    <span className="description">Up to 2X performance and power efficiency</span>
                    <span className="description">Up to 4X performance with DLSS 3</span>
                    <span className="description">Up to 2X ray tracing performance</span>
                    <ul className="links">
                        <li>
                            <button className="button">Buy</button>
                        </li>
                        <li>
                            <a className="link" onClick={handleLearnMore}>Learn More</a>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </div>
    );
}

