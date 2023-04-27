import React from "react";
import Logo from '../assets/images/logo.png';
import Search from '../assets/images/search.svg';
import Store from '../assets/images/store.svg';

function Nav() {
    return (
        <nav className="nav-wrapper">
            <div className="nav-content">
                <ul className="list-styled">
                    <li>
                        <img src={Logo} alt="NVIDIA" width="130px" height="30px" style={{ marginTop: '7px' }}/>
                    </li>
                    <li>
                        <a className="link-styled">GeForce</a>
                    </li>
                    <li>
                        <a className="link-styled">Products</a>
                    </li>
                    <li>
                        <a className="link-styled">Games & Tech </a>
                    </li>
                    <li>
                        <a className="link-styled">GeForce Experience</a>

                    </li>
                    <li>
                        <a className="link-styled">Drivers</a>
                    </li>
                    <li>
                        <a className="link-styled">News</a>
                    </li>
                    <li>
                        <a className="link-styled">Support</a>
                    </li>
                    <li>
                        <a className="link-styled">Shop</a>
                    </li>
                    <li>
                        <img src={Search} alt="Search" />
                    </li>
                    <li>
                        <img src={Store} alt="Store" />
                    </li>

                </ul>
            </div>
        </nav>
    );
}

export default Nav;