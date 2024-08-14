import "../styles/PlanetImage.css";

function PlanetImage({ planet, category }) {
    let imageSrc = "";

    switch (category) {
        case "overview":
            imageSrc = planet.images.planet;
            break;
        case "structure":
            imageSrc = planet.images.internal;
            break;
        case "geology":
            imageSrc = planet.image.geology;
            break;
        default:
            imageSrc = planet.images.planet;
    }

    return (
        <div className="planet-image">
            <img src={imageSrc} alt="" />
        </div>
    );
}
export default PlanetImage;
