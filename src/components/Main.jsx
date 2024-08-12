import '../styles/Main.css'
import PlanetDescription from './PlanetDescription'
import PlanetImage from './PlanetImage'

function Main ({earth}) {
    return (
        <div className="container">
            <PlanetImage earth={earth}/>
            <PlanetDescription />
        </div>
    
    )
}

export default Main