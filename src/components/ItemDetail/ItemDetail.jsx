import React from 'react'
import "./ItemDetail.css"

const ItemDetail = ({id,nombre,precio,img}) => {
  return (
    <div className='item-container'>
      <div className='img-container'><img src={img} alt={nombre} /></div>
      <div className='info-container'>
        <h2> {nombre} </h2>
        <h3> ${precio} </h3>
        <h3> {id} </h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente dignissimos aliquam facilis architecto explicabo natus magnam eum enim beatae dolores et consequuntur, officia asperiores qui accusamus sunt optio ad rerum?</p>
      </div>
      
    </div>
  )
}

export default ItemDetail