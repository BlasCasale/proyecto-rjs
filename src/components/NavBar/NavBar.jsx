import React from 'react'
import './NavBar.css'
import '../CardWidget/CardWidget.jsx'
import CardWidget from '../CardWidget/CardWidget.jsx'
import { Link, NavLink } from 'react-router-dom'


const NavBar = () => {
  return (
    <header>

      <Link to={"/"}>
        <h1>Mundo Gamer</h1>
      </Link>    

      <nav>

        <ul>
          <li>
            <NavLink to={"/"}>Inicio</NavLink>
          </li>

          <li>
            <NavLink to={"/category/procesador"}>Procesador</NavLink>
          </li>
            
          <li>
            <NavLink to={"/category/mother"}>Mother</NavLink>
          </li>

          <li>
            <NavLink to={"/category/gpu"}>GPU</NavLink>
          </li>

          <li>
            <NavLink to={"category/ram"}>RAM</NavLink>
          </li>
      
          <li>
            <NavLink to={"/category/discos"}>Discos</NavLink>
          </li>
          <li>
            <NavLink to={"/registro"}>Registrarse</NavLink>
          </li>

        </ul>

      </nav>

      <CardWidget/>

    </header>
  )
}

export default NavBar