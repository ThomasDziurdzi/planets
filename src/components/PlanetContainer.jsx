import { useSwipeable } from "react-swipeable";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import PlanetDescription from "./PlanetDescription";
import PlanetImage from "./PlanetImage";
import ButtonList from "./ButtonList";
import "../styles/PlanetContainer.css";

export default function PlanetContainer() {
  const {activeCategory, onCategoryChange} = useContext(AppContext)

    const categories = ["overview", "structure", "geology"];
    const currentIndex = categories.indexOf(activeCategory);
    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => {
            const nextIndex = (currentIndex + 1) % categories.length;
            onCategoryChange(categories[nextIndex]);
        },
        onSwipedRight: () => {
            const prevIndex =
                (currentIndex - 1 + categories.length) % categories.length;
                onCategoryChange(categories[prevIndex]);
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
