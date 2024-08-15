import "../styles/PlanetContainer.css";
import PlanetDescription from "./PlanetDescription";
import PlanetImage from "./PlanetImage";

function PlanetContainer({ activePlanet, activeCategory }) {
    return (
        <div className="container">
            <PlanetImage planet={activePlanet} category={activeCategory} />
            <PlanetDescription planet={activePlanet} category={activeCategory}/>
        </div>
    );
}

export default PlanetContainer;
