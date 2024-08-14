import { useState } from "react";
import data from "./data/data";
import "./App.css";
import Navbar from "./components/NavBar";
import MobileButtonList from "./components/MobileButtonList";
import PlanetInformations from "./components/PlanetInformations";
import PlanetContainer from "./components/PlanetContainer";

function App() {
    const [activePlanet, setActivePlanet] = useState(data[2]);
    const [activeCategory, setActiveCategory] = useState("overview");

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
    };

    const handlePlanetChange = (planetName) => {
        const selectedPlanet = data.find(
            (planet) => planet.name === planetName
        );
        setActivePlanet(selectedPlanet);
        setActiveCategory("overview");
    };
    
    return (
        <>
            <Navbar planets={data} onPlanetChange={handlePlanetChange} />
            <MobileButtonList
                onCategoryChange={handleCategoryChange}
                activeCategory={activeCategory}
            />
            <PlanetContainer
                activePlanet={activePlanet}
                activeCategory={activeCategory}
            />
            <PlanetInformations />
        </>
    );
}

export default App;
