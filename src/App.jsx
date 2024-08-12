import './App.css'
import Navbar from './components/NavBar'
import Main from './components/Main'
import earth from "./assets/planet-earth.svg"

function App() {

  return (
    <>
     <Navbar/>
     <Main earth={earth}/>
    </>
  )
}

export default App
