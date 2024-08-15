import { useSwipeable } from 'react-swipeable';
import "../styles/PlanetContainer.css";
import PropTypes from "prop-types";
import PlanetDescription from "./PlanetDescription";
import PlanetImage from "./PlanetImage";

export default function PlanetContainer({ activePlanet, activeCategory, setActiveCategory }) {
    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => {
            const categories = ["overview", "structure", "geology"];
            const currentIndex = categories.indexOf(activeCategory);
            const nextIndex = (currentIndex + 1) % categories.length;
            setActiveCategory(categories[nextIndex]);
        },
        onSwipedRight: () => {
            const categories = ["overview", "structure", "geology"];
            const currentIndex = categories.indexOf(activeCategory);
            const prevIndex = (currentIndex - 1 + categories.length) % categories.length;
            setActiveCategory(categories[prevIndex]);
        },
    });

    return (
        <div {...swipeHandlers} className="container">
            <PlanetImage planet={activePlanet} category={activeCategory} />
            <PlanetDescription planet={activePlanet} category={activeCategory} />
        </div>
    );
}

PlanetContainer.propTypes = {
    activePlanet: PropTypes.object.isRequired,
    activeCategory: PropTypes.string.isRequired,
    setActiveCategory: PropTypes.func.isRequired,
};
