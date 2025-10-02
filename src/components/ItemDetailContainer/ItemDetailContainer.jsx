import { useState, useEffect } from "react"
/* import { getUnProducto } from "../../AsyncMock" */
import { db } from "../../services/config"
import { getDoc, doc } from "firebase/firestore"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)

    const {IdItem} = useParams()

    useEffect(()=> {
      const nuevoDoc = doc(db,"productos",IdItem)

      getDoc(nuevoDoc)
      .then(res => {
        const data = res.data()
        const nuevoProducto = {id: res.id, ...data}
        setProducto(nuevoProducto)
      })
      .catch(error => console.log(error))
    }, [IdItem])

    /* useEffect(()=> {
        getUnProducto(IdItem)
        .then(respuesta => setProducto(respuesta))

    }, [IdItem]) */
  return (
    <div>
        <ItemDetail {...producto} />
    </div>
  )
}

export default ItemDetailContainer