import { useSwipeable } from "react-swipeable";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import PropTypes from "prop-types";
import PlanetDescription from "./PlanetDescription";
import PlanetImage from "./PlanetImage";
import ButtonList from "./ButtonList";
import "../styles/PlanetContainer.css";

export default function PlanetContainer() {
  const {activeCategory, setActiveCategory} = useContext(AppContext)

    const categories = ["overview", "structure", "geology"];
    const currentIndex = categories.indexOf(activeCategory);
    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => {
            const nextIndex = (currentIndex + 1) % categories.length;
            setActiveCategory(categories[nextIndex]);
        },
        onSwipedRight: () => {
            const prevIndex =
                (currentIndex - 1 + categories.length) % categories.length;
            setActiveCategory(categories[prevIndex]);
        },
    });

    return (
        <div {...swipeHandlers} className="container">
            <PlanetImage />
            <div className="planet-description-container">
                <PlanetDescription />
                <ButtonList />
            </div>
        </div>
    );
}

PlanetContainer.propTypes = {
    activeCategory: PropTypes.string.isRequired,
    setActiveCategory: PropTypes.func.isRequired,
};
