import './App.css'
import Navbar from './components/NavBar'
import Main from './components/Main'

import earth from "./assets/planet-earth.svg"
import MobileButtonList from './components/MobileButtonList'


function App() {

  return (
    <>
     <Navbar/>
     <MobileButtonList />
     <Main earth={earth}/>

    </>
  )
}

export default App
