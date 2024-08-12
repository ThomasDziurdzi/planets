import './App.css'
import Navbar from './components/NavBar'
import Main from './components/Main'

import earth from "./assets/planet-earth.svg"
import MobileButtonList from './components/MobileButtonList'
import PlanetInformations from './components/PlanetInformations'
import NavbarCopy from './components/NavbarCopy'


function App() {

  return (
    <>
     <NavbarCopy/>
     <MobileButtonList />
     <Main earth={earth}/>
     <PlanetInformations />

    </>
  )
}

export default App
