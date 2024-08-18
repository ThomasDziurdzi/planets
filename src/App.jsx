import { useState } from "react";
import data from "./data/data";
import "./App.css";
import Navbar from "./components/NavBar";
import MobileButtonList from "./components/MobileButtonList";
import PlanetInformations from "./components/PlanetInformations";
import PlanetContainer from "./components/PlanetContainer";
import AppContext from "./context/AppContext";

export default function App() {
    const [activePlanet, setActivePlanet] = useState(data[2]);
    const [activeCategory, setActiveCategory] = useState("overview");
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

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

    const activePlanetIndex = data.findIndex(
        (planet) => planet.name === activePlanet.name
    );

    return (
        <AppContext.Provider
            value={{
                planets: data,
                onPlanetChange: handlePlanetChange,
                isNavbarOpen: isNavbarOpen,
                setIsNavbarOpen: setIsNavbarOpen,
                activePlanet: activePlanet,
                onCategoryChange: handleCategoryChange,
                activeCategory: activeCategory,
                planetIndex :activePlanetIndex

            }}
        >
            <Navbar/>
            <div className={isNavbarOpen ? "hidden-content" : "app-container"}>
                <MobileButtonList/>
                <PlanetContainer
                    activePlanet={activePlanet}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                    onCategoryChange={handleCategoryChange}
                    planetIndex={activePlanetIndex}
                />
                <PlanetInformations planet={activePlanet} />
            </div>
        </AppContext.Provider>
    );
}
