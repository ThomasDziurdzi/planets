import burgerIcon from "../assets/icon-hamburger.svg"
import "../styles/Navbar.css"
function Navbar () {
    
    return (
       <header className="header">
        <h1>The Planets</h1>
        <img className="mobile" src={burgerIcon} alt="burger menu" />
        <nav className="header-nav">
            <menu className="header-menu">
            <li>Mercury</li>
                <li>Venus</li>
                <li>Earth</li>
                <li>Mars</li>
                <li>Jupiter</li>
                <li>Saturn</li>
                <li>Uranus</li>
                <li>Neptune</li>
            </menu>
        </nav>
       </header>
    )
}

export default Navbar;

