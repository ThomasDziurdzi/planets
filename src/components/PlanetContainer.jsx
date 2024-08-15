import "../styles/PlanetContainer.css";
import PropTypes from "prop-types";
import PlanetDescription from "./PlanetDescription";
import PlanetImage from "./PlanetImage";

export default function PlanetContainer({ activePlanet, activeCategory }) {
    return (
        <div className="container">
            <PlanetImage planet={activePlanet} category={activeCategory} />
            <PlanetDescription planet={activePlanet} category={activeCategory}/>
        </div>
    );
}

PlanetContainer.propTypes = {
    activePlanet: PropTypes.object.isRequired,
    activeCategory: PropTypes.string.isRequired
};