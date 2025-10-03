import React, { useContext } from 'react'
import { useState } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { db } from '../../services/config'
import { collection, addDoc } from 'firebase/firestore'
import "./CheckOut.css"

const Checkout = () => {

    const [nombre,setNombre] = useState("")
    const [apellido,setApellido] = useState("")
    const [telefono,setTelefono] = useState("")
    const [email,setEmail] = useState("")
    const [emailConfirmacion,setEmailConfirmacion] = useState("")
    const [error,setError] = useState("")
    const [ordenId,SetOrdenId] = useState("")

    const {carrito, vaciarCarrito, total, totalCantidad} = useContext(CarritoContext)

    const manejadorFormulario = (event) => {
        event.preventDefault()

        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor completa todos los campos")
            return
        }

        if(email != emailConfirmacion) {
            setError("Los campos de email no coinciden")
            return
        }

        const orden = {
            items: carrito.map (producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        }

        addDoc(collection(db,"ordenes"),orden)
        .then(docRef => {
            SetOrdenId(docRef.id)
            vaciarCarrito()
        })
        .catch(error => {
            console.log("Error")
            setError("Error al crear la orden")
        })

    }

  return (
    <div className='checkout-container'>
        <h2>CheckOut:</h2>
        <form className='form-compra' onSubmit={manejadorFormulario}>
            <div>
                <label htmlFor="">Nombre</label>
                <input type="text" onChange={(e) => setNombre(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Apellido</label>
                <input type="text" onChange={(e) => setApellido(e.target.value)} />
            </div>
            <div>
                <label htmlFor="">Telefono</label>
                <input type="text" onChange={(e) => setTelefono(e.target.value)} />
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor="">Email Confirmacion</label>
                <input type="email" onChange={(e) => setEmailConfirmacion(e.target.value)} />
            </div>
            {
                error && <p> {error} </p>
            }
            <button type='submit'>Confirmar compra</button>

            {
                ordenId && (<strong>Gracias por su compra, tu numero de orden es {ordenId} </strong>)
            }
        </form>
    </div>
  )
}

export default Checkout