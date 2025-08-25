import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"


const NavBar = () => {
    return (
            <header>
                <nav>
                    <ul>
                        <li><a href=""><img src="/logo-ecommerce.png" alt="" /></a></li>
                    </ul>
                    <ul className="menu">
                        <li><a href="">Productos</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contacto</a></li>
                    </ul>
                    <ul>
                        <li><a href=""><CartWidget/></a></li>
                    </ul>
                </nav>
            </header>
    )
}

export default NavBar