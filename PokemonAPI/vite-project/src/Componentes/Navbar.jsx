import '/src/Style/Navbar.css';
import { Link,Outlet } from "react-router-dom"

function Navbar() {
    return (
    <div className="topnav">
        <p><Link to="/">Home</Link></p>
        <p><Link to="/pokedex">Lista de Pokemons</Link></p>
    </div>
    )
}
export default Navbar;