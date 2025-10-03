import React from 'react'
import "./ItemDetail.css"
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'
import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from "react-router-dom"
import { toast } from 'react-toastify'

const ItemDetail = ({id,nombre,precio,img,stock,descripcion}) => {

  //Estado local con cantidad de productos agregados
  const [agregarCantidad, setAgregarCantidad] = useState(0)

  const {agregarAlCarrito} = useContext(CarritoContext)

  //Función manejadora de la cantidad
  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad)
    const item = {id,nombre,precio}
    agregarAlCarrito(item,cantidad)
    toast.success("Su compra fue enviada al carrito", {autoClose:1500, theme:"colored", position:"top-center"}) 
  }

  return (
    <div className='item-container'>
      <div className='img-container'><img src={img} alt={nombre} /></div>
      <div className='info-container'>
        <h2> {nombre} </h2>
        <h3> ${precio} </h3>
        <h3> ID: {id} </h3>
        <p> {descripcion} </p>
        {
          agregarCantidad > 0 ? (<Link className='btn-compra' to="/cart">Terminar Compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
        }
      </div>
      
    </div>
  )
}

export default ItemDetail