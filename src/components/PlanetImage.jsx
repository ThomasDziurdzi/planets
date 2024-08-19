import "../styles/PlanetImage.css";
import { useContext } from "react";
import AppContext from "../context/AppContext";

export default function PlanetImage() {
    const { activePlanet, activeCategory } = useContext(AppContext);

    const imageMap = {
        overview: [activePlanet.images.planet],
        structure: [activePlanet.images.internal],
        geology: [activePlanet.images.planet, activePlanet.images.geology],
    };

    const imagesToDisplay =
        imageMap[activeCategory] || activePlanet.images.planet;

    return (
        <div className="planet-image">
            {imagesToDisplay.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={`${activePlanet.name} ${activeCategory}`}
                    className={`planet-image-svg ${
                        activeCategory === "geology" && index === 1
                            ? "geology-image"
                            : ""
                    }`}
                />
            ))}
        </div>
    );
}
