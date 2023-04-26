import React, { useContext } from 'react'
import { useState, useRef } from 'react'
import './Form.css'
import { LoginContext } from '../../context/loginContext'
 
const Form = () => {
    const {loginUser} = useContext(LoginContext)

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

    const [input, setInput] = useState({dni: "", pass: ""})

    const checkUser = (dni, pass) => {
      setClients([...clients, (dni, pass)])

      const findDni = clients.find(client => client.dni == dni)
      const findPass = clients.find(client => client.pass == pass)


      if (findDni && findPass) {
        loginUser(findDni)
      } else {
        pForm.current.textContent = "El DNI y la contraseña no coinciden."
        setColor("p--negative")
      }
    }

    const handleInput = (e) => {
      setInput({
        ...input,
        [e.target.name]: e.target.value
      })
    }

    const handlerSubmit = (e) => {
      e.preventDefault()

      checkUser(input.dni, input.pass)
    }

  return (
    <>

    <fieldset className='fieldset--login'>

      <form className='form' onSubmit={handlerSubmit}>

        <legend>Ingresa a tu cuenta</legend>

        <input type="number" value={input.dni} placeholder='Ingresa tu DNI' name='dni' required onChange={handleInput} className='input--form'/>

        <input type="password" value={input.pass} placeholder='Ingresa tu contraseña' name='pass' required onChange={handleInput} className='input--form'/>

        <button type="submit" className='form--btn'>Ingresar</button>

        <p ref={pForm} className={style}></p>

      </form>

    </fieldset>

  </>
  )
}

export default Form