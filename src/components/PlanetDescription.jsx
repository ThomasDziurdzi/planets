import PropTypes from "prop-types";
import "../styles/PlanetDescription.css";
import sourceIcon from "../assets/icon-source.svg";
import { useContext } from "react";
import AppContext from "../context/AppContext";

export default function PlanetDescription() {
  const {activePlanet, activeCategory} = useContext(AppContext)
    const { content, source } = activePlanet[activeCategory];
    return (
        <div className="planet-description">
            <h1 className="planet-description-title">{activePlanet.name}</h1>
            <p className="planet-description-text">{content}</p>
            <div className="infos-link">
                Source:{" "}
                <a href={source} target="_blank">
                    Wikipedia <img src={sourceIcon} alt="source icon" />
                </a>
            </div>
        </div>
    );
}

PlanetDescription.propTypes = {
  activePlanet: PropTypes.shape({
        name: PropTypes.string.isRequired,
        overview: PropTypes.shape({
            content: PropTypes.string.isRequired,
            source: PropTypes.string.isRequired,
        }).isRequired,
        structure: PropTypes.shape({
            content: PropTypes.string.isRequired,
            source: PropTypes.string.isRequired,
        }).isRequired,
        geology: PropTypes.shape({
            content: PropTypes.string.isRequired,
            source: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
    activeCategory: PropTypes.oneOf(["overview", "structure", "geology"]).isRequired,
};
