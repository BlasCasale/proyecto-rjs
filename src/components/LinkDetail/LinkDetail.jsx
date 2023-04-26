import React from 'react'
import { Link } from 'react-router-dom'

const LinkDetail = () => {
  return (
    <>
        <Link to={"/"}>Seguir comprando</Link>
        <Link to={"/cart"}>Terminar compra</Link>
    </>
  )
}

export default LinkDetail