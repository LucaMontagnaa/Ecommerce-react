import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'

const Item = ({id,nombre,precio,img,stock}) => {
  return (
    <div className='cardProducto'>
      <div className='imgContainer'><img src={img} alt={nombre} /></div>
      <div className='datos-container'>
        <h3>{nombre}</h3>
        <p>${precio}</p>
        <p>ID: {id} </p>
        <p>Stock:{stock} </p>
        <Link to={`/item/${id}`}> <button>Ver Detalles</button> </Link> 
      </div>
        
    </div>
  )
}

export default Item