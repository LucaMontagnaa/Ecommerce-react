
import "./ItemListContainer.css"
import { useState, useEffect } from 'react'
 /* import { getProductos, getProductosPorCategoria } from '../../AsyncMock' */
import { db } from "../../services/config"
import { collection, getDocs, query, where } from "firebase/firestore"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({}) => {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(false)

  const {idCategoria} = useParams()

  useEffect(()=> {
    const misProductos = idCategoria ? query(collection(db, "productos"), where("idCat", "==", idCategoria)) : collection(db, "productos")
    getDocs(misProductos)
    .then(res => {
      const nuevosProductos = res.docs.map(doc=>{
        const data = doc.data()
        return{id: doc.id, ... data}
      })
      setProductos(nuevosProductos)
    })
    .catch(error => console.log(error))
  }, [idCategoria])



  /* useEffect(()=>{
    setLoading(true)
    const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos

    funcionProductos(idCategoria)
    .then(respuesta => setProductos(respuesta))
  }, [idCategoria]) */

  return (
    <div className='container'>
      <h2>Mis productos</h2>
      <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer