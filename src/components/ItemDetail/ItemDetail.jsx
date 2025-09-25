import React from 'react'
import "./ItemDetail.css"
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'
import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from "react-router-dom"

const ItemDetail = ({id,nombre,precio,img,stock}) => {

  //Estado local con cantidad de productos agregados
  const [agregarCantidad, setAgregarCantidad] = useState(0)

  const {agregarAlCarrito} = useContext(CarritoContext)

  //Función manejadora de la cantidad
  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad)
    const item = {id,nombre,precio}
    agregarAlCarrito(item,cantidad)
  }

  return (
    <div className='item-container'>
      <div className='img-container'><img src={img} alt={nombre} /></div>
      <div className='info-container'>
        <h2> {nombre} </h2>
        <h3> ${precio} </h3>
        <h3> {id} </h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente dignissimos aliquam facilis architecto explicabo natus magnam eum enim beatae dolores et consequuntur, officia asperiores qui accusamus sunt optio ad rerum?</p>
        {
          agregarCantidad > 0 ? (<Link to="/cart">Terminar Compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
        }
      </div>
      
    </div>
  )
}

export default ItemDetail