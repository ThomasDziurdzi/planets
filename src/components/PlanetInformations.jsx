import "../styles/PlanetInformations.css";
import { useContext } from "react";
import AppContext from "../context/AppContext";

export default function PlanetInformations() {
    const { activePlanet } = useContext(AppContext);

    const { rotation, revolution, radius, temperature } = activePlanet;

    return (
        <div className="informations-container">
            <div className="informations-card">
                <h3>Rotation Time</h3>
                <span>{rotation}</span>
            </div>
            <div className="informations-card">
                <h3>Revolution Time</h3>
                <span>{revolution}</span>
            </div>
            <div className="informations-card">
                <h3>radius</h3>
                <span>{radius}</span>
            </div>
            <div className="informations-card">
                <h3>Average Temp.</h3>
                <span>{temperature}</span>
            </div>
        </div>
    );
}
