import { useState } from "react";
import PropTypes from "prop-types";
import BurgerIcon from "../components/svg/BurgerIcon";
import chevronIcon from "../assets/icon-chevron.svg";
import "../styles/Navbar.css";

function Navbar({ planets, onPlanetChange, isNavbarOpen, setIsNavbarOpen }) {
  

    const colors = [
        "#def4fc",
        "#f7cc7f",
        "#545bfe",
        "#ff6a45",
        "#ecad7a",
        "#fccb6b",
        "#65f0d5",
        "#497efa",
    ];

    return (
        <header className="header">
            <h1 className="header-title">The Planets</h1>
            <BurgerIcon
                className="mobile header-burger-icon"
                alt="burger menu"
                onClick={() => setIsNavbarOpen(!isNavbarOpen)}
            />
            {isNavbarOpen && (
                <div className="overlay-menu-container">
                    <div className="overlay-header-container">
                        <h1 className="overlay-title">The Planets</h1>
                        <BurgerIcon
                            className="mobile overlay-burger-icon"
                            fill="#838391"
                            onClick={() => {
                                setIsNavbarOpen(!isNavbarOpen);
                            }}
                        />
                    </div>

                    <nav className="overlay-nav">
                        <ul className="overlay-menu">
                            {planets.map((planet, index) => (
                                <li key={index} className="overlay-list-planet"
                                onClick={() => {
                                    onPlanetChange(planet.name)
                                    setIsNavbarOpen(false);
                                }}
                                >
                                    <div
                                        style={{
                                            backgroundColor: `${colors[index]}`,
                                        }}
                                        className="overlay-color-list"
                                    ></div>
                                    <div className="overlay-list-planet-name">
                                        {planet.name}
                                        <img src={chevronIcon} alt="chevron" />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
}

Navbar.propTypes = {
    planets: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
        })
    ),
};

export default Navbar;