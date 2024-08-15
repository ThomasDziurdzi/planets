import { useSwipeable } from 'react-swipeable';
import PropTypes from "prop-types";
import PlanetDescription from "./PlanetDescription";
import PlanetImage from "./PlanetImage";
import "../styles/PlanetContainer.css";

export default function PlanetContainer({ activePlanet, activeCategory, setActiveCategory }) {

    const categories = ["overview", "structure", "geology"];
    const currentIndex = categories.indexOf(activeCategory);
    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => {
            const nextIndex = (currentIndex + 1) % categories.length;
            setActiveCategory(categories[nextIndex]);
        },
        onSwipedRight: () => {
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
