import React from 'react'
import './LoginForm.css'
import { useState, useRef } from 'react'

const LoginForm = () => {
    const [color, setColor] = useState("")

    const style = color

    const pForm = useRef(null)

    const [clients, setClients] = useState( () => {
      const clientsLS = localStorage.getItem('clients')

      if (clientsLS) {
        return JSON.parse(clientsLS)
      } else {
        return []
      }
    })

    const [inputDni, setInputDni] = useState("")

    const [inputPass, setInputPass] = useState("")

    const checkUser = (dni, pass) => {
      setClients([...clients, (dni, pass)])

      const findDni = clients.find(client => client.dni == dni)
      const findPass = clients.find(client => client.pass == pass)

      if (findDni && findPass) {
        pForm.current.textContent = "Bienvenido a tu cuenta."
        setColor("p--positive")
      } else {
        pForm.current.textContent = "El DNI y la contraseña no coinciden."
        setColor("p--negative")
      }
    }

    const handlerSubmit = (e) => {
      e.preventDefault()

      checkUser(inputDni, inputPass)
    }

  return (
    <div className='form--box'>

      <fieldset className='fieldset--login'>

        <form className='form' onSubmit={handlerSubmit}>

          <legend>Ingresa a tu cuenta</legend>

          <input type="number" value={inputDni} placeholder='Ingresa tu DNI' required onChange={ (e) => setInputDni(e.target.value)} className='input--form'/>

          <input type="password" value={inputPass} placeholder='Ingresa tu contraseña' required onChange={ (e) => setInputPass(e.target.value)} className='input--form'/>

          <button type="submit" className='form--btn'>Ingresar</button>

          <p ref={pForm} className={style}></p>

        </form>

      </fieldset>

    </div>
  )
}

export default LoginForm