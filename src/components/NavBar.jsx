import burgerIcon from "../assets/icon-hamburger.svg"
import "../styles/Navbar.css"
function Header () {
    return (
       <header>
        <nav>
        <h1> The Planets</h1>
        <img src={burgerIcon} alt="burger menu" />
        </nav>
        
       </header>
    )
}

export default Header;