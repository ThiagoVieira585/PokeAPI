import { Link,Outlet } from "react-router-dom"
import Navbar from "../Componentes/Navbar"


function PaginaInicial(){
    return(
            <>
            <Navbar/>
            <Outlet/>

</>

    )
}
export default PaginaInicial