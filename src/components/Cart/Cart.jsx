import React from 'react'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'
import "./Cart.css"


const Cart = () => {

    const {carrito,vaciarCarrito,total,cantidadTotal} = useContext(CarritoContext)

    if(cantidadTotal === 0) {
        return(
            <>
                <h2 className='sinProductos'>No hay productos en el carrito</h2>
                <Link className='btn-verProductos' to="/">Ver Productos </Link>
            </>
        )
    }

  return (
    <div className='Cart-container'>
        {
          carrito.map(producto => <CartItem key={producto.id}{...producto}/>)
        }
        <div className='info-compra-container'> 
          <h4>Total: ${total}</h4>
          <h4>Cantidad Total: ${cantidadTotal}</h4>
          <button className='btn-vaciar' onClick={()=> vaciarCarrito()}>Vaciar Carrito</button>
          <Link className='btn-finalizar' to="/checkout">Finalizar Compra</Link>
        </div>
    </div>
  )
}

export default Cart