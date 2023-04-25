import React from 'react'
import { useState, useEffect, useRef } from 'react'
import './RegisterForm.css'

const RegisterForm = () => {
    const [color, setColor] = useState("")

    const style = color

    class Client {
        constructor (name, pass, dni){
            this.name = name
            this.pass = pass
            this.dni = dni
        }
    }

    const [clients, setClients ] = useState( () => {
        const clientsLS = localStorage.getItem('clients')

        if (clientsLS) {
            return JSON.parse(clientsLS)
        }else {
            return []
        }
    })

    const pForm = useRef(null)

    const [input, setInput] = useState({name: "", pass: "", dni: ""})

    const registerUser = (name, dni, pass) => {
        setClients([...clients, new Client(name, pass, dni)])
    }

    const handleInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        const userDni = clients.find(user => user.dni == input.dni)

        e.preventDefault()

        if (userDni) {
            pForm.current.textContent = "Ya existe un usuario registrado."
            setColor("p--negative")
        } else {
            registerUser(input.name, input.dni, input.pass)
            pForm.current.textContent = "Usuario registrado existosamente."
            setColor("p--positive")
        }
    }

    useEffect( () => {
        localStorage.setItem('clients', JSON.stringify(clients))
    } , [clients])


  return (
    <div className='form--box'>

        <fieldset className='fieldset--register'>
            
            <form className='form' onSubmit={handleSubmit}>

                <legend>Registra tu cuenta</legend>
                
                <input type="text" className='input--form' required name='name' placeholder='Ingresa tu nombre' value={input.name} onChange={handleInput}/>

                <input type="number" className='input--form' required name='dni' placeholder='Ingresa tu DNI' value={input.dni} onChange={handleInput}/>

                <input type='password' className='input--form' required name='pass' placeholder='Ingresa tu contraseña' value={input.pass} onChange={handleInput}/>

                <button type='submit' className='form--btn'>Registrarse</button>

                <p ref={pForm} className={style}></p>

            </form>            

        </fieldset>

    </div>
  )
}

export default RegisterForm