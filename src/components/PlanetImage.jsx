import "../styles/PlanetImage.css"
import jupiter from "../assets/planet-jupiter.svg"

function PlanetImage ({earth}) {
    return (
        <div className="planet-image">
            <img src={earth} alt="" />
        </div>
    )
}
export default PlanetImage