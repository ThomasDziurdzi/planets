import "../styles/PlanetDescription.css";
import sourceIcon from "../assets/icon-source.svg";
function PlanetDescription() {
    return (
        <div className="planet-description">
            <h1 className="planet-description-title">earth</h1>
            <p className="planet-description-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia, qui magnam corporis alias neque eius doloribus
                exercitationem officiis similique sint, in, blanditiis harum
                esse maxime aspernatur eveniet quia velit! Cum.
            </p>
            <p className="infos-link">
                Source:{" "}
                <a href="#">
                    Wikipedia <img src={sourceIcon} alt="source icon" />
                </a>
            </p>
        </div>
    );
}
export default PlanetDescription;
