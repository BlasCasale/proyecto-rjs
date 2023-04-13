import React from 'react'
import { useState, useEffect, useRef } from 'react'
import './RegisterForm.css'

const RegisterForm = () => {

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

    const [inputName, setInputName] = useState("")

    const [inputDni, setInputDni] = useState("")

    const [inputPass, setInputPass] = useState("")

    const registerUser = (name, dni, pass) => {
        setClients([...clients, new Client(name, pass, dni)])
    }

    const handleSubmit = (e) => {
        const userDni = clients.find(user => user.dni == inputDni)

        e.preventDefault()

        if (userDni) {
            pForm.current.value = "Ya existe un usuario registrado."
        } else {
            registerUser(inputName, inputDni, inputPass)
            setInputName("")
            setInputDni("")
            setInputPass("")
        }
    }

    useEffect( () => {
        localStorage.setItem('clients', JSON.stringify(clients))
    } , [clients])


  return (
    <div className='form--box'>

        <fieldset className='fieldset--register'>
            
            <form className='form' onSubmit={handleSubmit}>

                <legend className='legend--register'>Registra tu cuenta</legend>
                
                <input type="text" className='input--form' placeholder='Ingresa tu nombre' value={inputName} onChange={(e) => setInputName(e.target.value)}/>

                <input type="number" className='input--form' min={8} placeholder='Ingresa tu DNI' value={inputDni} onChange={(e) => setInputDni(e.target.value)}/>

                <input type='password' className='input--form' placeholder='Ingresa tu contraseña' value={inputPass} onChange={(e) => setInputPass(e.target.value)}/>

                <button type='submit' className='form--btn'>Registrarse</button>

                <p ref={pForm}></p>

            </form>            

        </fieldset>

    </div>
  )
}

export default RegisterForm