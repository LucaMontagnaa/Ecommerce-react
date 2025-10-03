
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "final-81705-7985d.firebaseapp.com",
  projectId: "final-81705-7985d",
  storageBucket: "final-81705-7985d.firebasestorage.app",
  messagingSenderId: "859424016989",
  appId: "1:859424016989:web:830851642eb9fd8f7a5bb4"
}


const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)


const MisProductos = [
    {id:"1", nombre:"Proteína", precio:30000, img:"../proteina.png", idCat:"suplemento", stock:10}, 
    {id:"2", nombre:"Creatina", precio:27000, img:"../creatina-300.png", idCat:"suplemento", stock:20},
    {id:"3", nombre:"Pre Entreno", precio:20000, img:"../pre-entreno.png", idCat:"suplemento", stock:12},
    {id:"4", nombre:"Cafeína", precio:15000, img:"../cafeina.png", idCat:"suplemento", stock:11},
    {id:"5", nombre:"Mancuernas", precio:10000, img:"../mancuernas.png", idCat:"accesorio", stock:14},
    {id:"6", nombre:"Soga", precio:15000, img:"../soga.png", idCat:"accesorio", stock:13} ,
    {id:"7", nombre:"Mochila", precio:40000, img:"../mochila.png", idCat:"accesorio", stock:10} ,
    {id:"8", nombre:"Barra", precio:30000, img:"../barra.png", idCat:"accesorio", stock:20} ,
    {id:"9", nombre:"Straps", precio:17000, img:"../straps.png", idCat:"accesorio", stock:14} ,
    {id:"10", nombre:"Vaso", precio:15000, img:"../vasoGym.png", idCat:"accesorio", stock:10}
]

import { collection, doc, writeBatch } from "firebase/firestore"; 

const subirProductos = async () => {
  const batch = writeBatch(db); 
  const productosRef = collection(db, "productos"); 

  
  MisProductos.forEach((producto) => {
    const nuevoDoc = doc(productosRef)
    batch.set(nuevoDoc, producto)
  });


  try {
    await batch.commit();
    console.log("Productos subidos exitosamente");
  } catch (error) {
    console.error("Error subiendo productos: ", error);
  }
}

/* subirProductos() */