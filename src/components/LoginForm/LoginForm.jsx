import React from 'react'
import './LoginForm.css'
import { useState, useEffect } from 'react'

const LoginForm = () => {
    const [clients, setClients] = useState( () => {
        const clientsLS = localStorage.getItem('clients')

        if (clientsLS) {
            return JSON.parse(clientsLS)
        } else {
            return []
        }
    })


  return (
    <div>

    </div>
  )
}

export default LoginForm