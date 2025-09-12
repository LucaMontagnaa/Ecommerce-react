import { useState, useEffect } from "react"
import { getUnProducto } from "../../AsyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)

    const {IdItem} = useParams()

    useEffect(()=> {
        getUnProducto(IdItem)
        .then(respuesta => setProducto(respuesta))

    }, [IdItem])
  return (
    <div>
        <ItemDetail {...producto} />
    </div>
  )
}

export default ItemDetailContainer