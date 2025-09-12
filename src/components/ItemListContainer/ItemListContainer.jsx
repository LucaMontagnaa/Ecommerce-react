import React from 'react'
import "./ItemListContainer.css"
import { useState, useEffect } from 'react'
import { getProductos, getProductosPorCategoria } from '../../AsyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({}) => {

  const [productos, setProductos] = useState([])

  const {idCategoria} = useParams()



  useEffect(()=>{
    const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos

    funcionProductos(idCategoria)
    .then(respuesta => setProductos(respuesta))
  }, [idCategoria])

  return (
    <div className='container'>
      <h2>Mis productos</h2>
      <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer