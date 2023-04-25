import { useState, createContext } from "react";

export const LoginContext = createContext({loged: null})

export const LoginProvider = ({children}) => {
    const [loged, setLoged] = useState(null)

    const loginUser = (param) => {
        return setLoged(param)
    }

    const logoutUser = () => {
        return setLoged(null)
    }

    return (
        <LoginContext.Provider value={ {loged, loginUser, logoutUser}}>
            {children}
        </LoginContext.Provider>
    )
}