import React from 'react'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'


const Cart = () => {

    const {carrito,vaciarCarrito,total,cantidadTotal} = useContext(CarritoContext)

    if(cantidadTotal === 0) {
        return(
            <>
                <h2>No hay productos en el carrito</h2>
            </>
        )
    }

  return (
    <div>

    </div>
  )
}

export default Cart