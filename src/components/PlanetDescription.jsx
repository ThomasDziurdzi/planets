import PropTypes from 'prop-types';
import "../styles/PlanetDescription.css";
import sourceIcon from "../assets/icon-source.svg";

export default function PlanetDescription({ planet, category }) {
    const { content, source } = planet[category];
    return (
        <div className="planet-description">
            <h1 className="planet-description-title">{planet.name}</h1>
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
    planet: PropTypes.shape({
        name: PropTypes.string.isRequired,
        overview: PropTypes.shape({
            content: PropTypes.string.isRequired,
            source: PropTypes.string.isRequired
        }).isRequired,
        structure: PropTypes.shape({
            content: PropTypes.string.isRequired,
            source: PropTypes.string.isRequired
        }).isRequired,
        geology: PropTypes.shape({
            content: PropTypes.string.isRequired,
            source: PropTypes.string.isRequired
        }).isRequired,
    }).isRequired,
    category: PropTypes.oneOf(['overview', 'structure', 'geology']).isRequired
};