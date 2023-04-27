import React from "react";
import Iphone from "../assets/images/iphone-14.jpg";
import HoldingIphone from "../assets/images/iphone-hand.png"

export default function Jumbotron() {

    const handleLearnMore = () => {
        const element = document.querySelector(".sound-section");
        window.scrollTo({
            top: element.getBoundingClientRect().top,
            left: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className="jumbotron-section wrapper">
            <h2 className="title">New</h2>
            <span className="description">
                GeForce RTX 40 Series
            </span>
            <p className="text">BEYOND FAST</p>
            <span className="description">
                     Out of Stock
            </span>
            <ul className="links">
                <li>
                    <button className="button">Buy</button>
                </li>
                <li>
                    <a className="link" onClick={handleLearnMore}>Learn More</a>
                </li>
            </ul>
            

        </div>
    )
}
