import "../styles/PlanetDescription.css";
import sourceIcon from "../assets/icon-source.svg";
function PlanetDescription({planet, category}) {
    const {content, source} = planet[category]
    return (
        <div className="planet-description">
            <h1 className="planet-description-title">{planet.name}</h1>
            <p className="planet-description-text">
                {content}
            </p>
            <div className="infos-link">
                Source:{" "}
                <a href={source} target="_blank">
                    Wikipedia <img src={sourceIcon} alt="source icon" />
                </a>
            </div>
        </div>
    );
}
export default PlanetDescription;
