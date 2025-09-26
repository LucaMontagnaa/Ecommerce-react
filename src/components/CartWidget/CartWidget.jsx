import React, { useContext } from 'react'
import "./CartWidget.css"
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'
const CartWidget = () => {

    const {cantidadTotal} = useContext(CarritoContext)
    return (
        <div>
            <Link to="/cart" >
            <img className='imgCarrito' src="/ShoppingCart.png" alt="Imagen de carrito" />

            {
                cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
            }

            
            </Link>
        </div>
    )
}

export default CartWidget