import PropTypes from 'prop-types';
import "../styles/PlanetInformations.css"

export default function PlanetInformations ({planet}) {

    const { rotation, revolution, radius, temperature } = planet;

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
    )
}

PlanetInformations.propTypes = {
    planet: PropTypes.shape({
        rotation: PropTypes.string.isRequired,
        revolution: PropTypes.string.isRequired,
        radius: PropTypes.string.isRequired,
        temperature: PropTypes.string.isRequired,
    }).isRequired,
}

