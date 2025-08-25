import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'

const App = () => {

  return (
    <>
      <NavBar/>
      <ItemListContainer nombre="Item 1" />
      <ItemListContainer nombre="Item 2" />
      <ItemListContainer nombre="Item 3"/>
    </>
  )
}

export default App
