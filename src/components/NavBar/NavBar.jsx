import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import { Link } from "react-router-dom"


const NavBar = () => {
    return (
            <header>
                <nav>
                    <ul>
                        <li> <Link to="/"><img src="/logo-ecommerce.png" alt="" /></Link> </li>
                    </ul>
                
                    <ul className="menu">
                        <li><Link to="/categoria/suplemento">Suplementos</Link></li>
                        <li><Link to="/categoria/accesorio">Accesorios</Link></li>
                    </ul>
                    <ul>
                        <li><CartWidget/></li>
                    </ul>
                </nav>
            </header>
    )
}

export default NavBar