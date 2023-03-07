import { useState } from 'react'
import { Routes, Route, Outlet } from "react-router-dom"
import ListaPoke from "./Componentes/ListaPoke"
import PaginaInicial from './Paginas/PaginaInicial'
import Listagem from './Paginas/Listagem'
import '/src/Style/Navbar.css';
import Home from './Paginas/home'


function App() {
  const [count, setCount] = useState(0)

  document.body.classList.add('background');
  
  return (
    <>

    <Routes>
      <Route path="/" element={<PaginaInicial></PaginaInicial>}>
      <Route index element={<Home/>}></Route>
        <Route path="pokedex" element={<ListaPoke/>} />
        <Route path="listagem/:id" element={<Listagem/>}></Route>
      </Route>
    </Routes>

    </>
  )
}

export default App
