import "../styles/PlanetImage.css"

function PlanetImage ({earth}) {
    return (
        <div className="planet-image">
            <img src={earth} alt="" />
        </div>
    )
}
export default PlanetImage