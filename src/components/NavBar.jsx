import { useState } from "react";
import burgerIcon from "../assets/icon-hamburger.svg";
import chevronIcon from "../assets/icon-chevron.svg";
import "../styles/Navbar.css";

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="header">
            <h1 className="header-title">The Planets</h1>
            <img
                className="mobile header-burger-icon"
                src={burgerIcon}
                alt="burger menu"
                onClick={() => setOpen(!open)}
            />
            {open && (
                <div className="overlay-menu-container">
                    <div className="overlay-header-container">
                        <h1 className="overlay-title">The Planets</h1>
                        <img
                            className="mobile overlay-burger-icon"
                            src={burgerIcon}
                            alt="burger menu"
                            onClick={() => setOpen(!open)}
                        />
                    </div>

                    <nav className="overlay-nav">
                        <ul className="overlay-menu">
                            <li className="overlay-list-planet">
                                <div className="overlay-color-list"></div>
                                <div className="overlay-list-planet-name">
                                    Mercury
                                    <img src={chevronIcon} alt="chevron" />
                                </div>
                            </li>
                            <li>Venus</li>
                            <li>Earth</li>
                            <li>Mars</li>
                            <li>Jupiter</li>
                            <li>Saturn</li>
                            <li>Uranus</li>
                            <li>Neptune</li>
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
}

export default Navbar;
