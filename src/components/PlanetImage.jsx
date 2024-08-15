import PropTypes from "prop-types";
import "../styles/PlanetImage.css";

export default function PlanetImage({ planet, category }) {
    const imageMap = {
        overview: [planet.images.planet],
        structure: [planet.images.internal],
        geology: [planet.images.planet, planet.images.geology],
    };

    const imagesToDisplay = imageMap[category] || planet.images.planet;

    return (
        <div className="planet-image">
            {imagesToDisplay.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={`${planet.name} ${category}`}
                    className={`planet-image-svg ${
                        category === "geology" && index === 1
                            ? "geology-image"
                            : ""
                    }`}
                />
            ))}
        </div>
    );
}

PlanetImage.propTypes = {
    planet: PropTypes.shape({
        name: PropTypes.string.isRequired,
        images: PropTypes.shape({
            planet: PropTypes.string.isRequired,
            internal: PropTypes.string.isRequired,
            geology: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
    category: PropTypes.oneOf(["overview", "structure", "geology"]).isRequired,
};
