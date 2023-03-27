import React from 'react'
import './NavBar.css'
import '../CardWidget/CardWidget.jsx'
import CardWidget from '../CardWidget/CardWidget.jsx'


const NavBar = () => {
  return (
    <header>

        <h1>Mundo Gamer</h1>

        <nav>

          <ul>

            <li>
              <a href="https://www.marolio.com.ar/blog" target={'_blank'}>Inicio</a>
              </li>

            <li>
              <a href="https://www.marolio.com.ar/portfolio" target={'_blank'}>Login</a>
            </li>

            <li>
              <a href="https://www.marolio.com.ar/publicidades" target={'_blank'}>Registrarse</a>
            </li>

          </ul>

        </nav>

        <CardWidget/>

    </header>
  )
}

export default NavBar