import React, { useContext } from 'react'
import { LoginContext } from '../../context/loginContext'
import './UserAvatarNav.css'

const UserAvatarNav = () => {
    const {loged, logoutUser} = useContext(LoginContext)

  return (
    <>
        <div className='box--user'>

            <img src="./img/avatar.png" alt={loged.name} className='img--user'/>
            <p className='name--user'>{loged.name}</p>

        </div>

        <div className='box--user'>
            <button onClick={() => logoutUser()} className='btn--avatar'>Cerrar sesión</button>
        </div>
    </>
  )
}

export default UserAvatarNav