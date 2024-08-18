import PropTypes from "prop-types";
import { useContext, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import BurgerIcon from "../components/svg/BurgerIcon";
import chevronIcon from "../assets/icon-chevron.svg";
import "../styles/Navbar.css";
import AppContext from "../context/AppContext";

export default function Navbar() {

  const {planets, onPlanetChange, isNavbarOpen, setIsNavbarOpen, activePlanet} = useContext(AppContext)
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

    const menuRef = useRef(null);

    useGSAP(() => {
        if (isNavbarOpen && menuRef.current) {
            return gsap.from(menuRef.current.children, {
                autoAlpha: 0,
                x: -50,
                duration: 0.2,
                stagger: 0.1,
            });
        }
        return null;
    }, [isNavbarOpen]);

    return (
        <header className="header">
            <h1 className="header-title">The Planets</h1>
            <BurgerIcon
                className="mobile header-burger-icon"
                alt="burger menu"
                onClick={() => setIsNavbarOpen(!isNavbarOpen)}
            />
            <nav className=" not-mobile header-nav">
                <ul className="not-mobile header-menu">
                    {planets.map((planet, index) => (
                        <li
                            key={index}
                            className={`not-mobile header-list-planet ${
                                planet.name === activePlanet.name
                                    ? "active"
                                    : ""
                            }`}
                            onClick={() => {
                                onPlanetChange(planet.name);
                            }}
                            style={{
                                color:
                                    planet.name === activePlanet.name
                                        ? `${colors[index]}`
                                        : "",
                            }}
                        >
                            <div className="not-mobile header-list-planet-name">
                                {planet.name}
                            </div>
                        </li>
                    ))}
                </ul>
            </nav>
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
                        <ul ref={menuRef} className="overlay-menu">
                            {planets.map((planet, index) => (
                                <li
                                    key={index}
                                    className="overlay-list-planet"
                                    onClick={() => {
                                        onPlanetChange(planet.name);
                                        setIsNavbarOpen(false);
                                    }}
                                >
                                    <div
                                        style={{
                                            backgroundColor: `${colors[index]}`,
                                        }}
                                        className="overlay-color-list"
                                    />
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
    ).isRequired,
    onPlanetChange: PropTypes.func.isRequired,
    isNavbarOpen: PropTypes.bool.isRequired,
    setIsNavbarOpen: PropTypes.func.isRequired,
    activePlanet: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }).isRequired,
};
