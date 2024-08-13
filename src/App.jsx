import './App.css'
import Navbar from './components/NavBar'
import Main from './components/Main'
import MobileButtonList from './components/MobileButtonList'
import PlanetInformations from './components/PlanetInformations'
import planets from "./data.json"
import earth from "./assets/planet-earth.svg"



function App() {

  return (
    <>
     <Navbar planets={planets}/>
     <MobileButtonList />
     <Main earth={earth}/>
     <PlanetInformations />

    </>
  )
}

export default App
