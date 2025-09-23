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

export const getProductos = () =>{
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(MisProductos)
        },2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = MisProductos.find(item => item.id === id)
            resolve(producto)
        }, 2000);
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = MisProductos.filter(item => item.idCat === idCategoria)
            resolve(productosCategoria)
        }, 1000)
    })
}