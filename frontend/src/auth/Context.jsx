import { createContext, useEffect, useState } from "react";
import{jwtDecode} from 'jwt-Decode';
//verificar se o token é válido
const isValidToken = (token) => {
    const decoded = jwtDecode(token)
    const currentTime = Date.now() / 1000
    return decoded.exp > currentTime
}

//pegar a role do usuário
const getRole = (token) => {
    const decoded = jwtDecode(token)
    return decoded.role
}

//Exportar o Context = REACT CONTEXT
export const AuthContext = createContext()

//Exportar meu Provider
export const AuthProvider = ({children}) => {
    //token
    const [token, setToken]= useState(null);
    const [role, setRole]= useState(null);
    const [loading, setLoading]= useState(true);

    useEffect(()=>{
        const storageToken = localStorage.getItem('token')
        if(storageToken && isValidToken(storageToken)){
            setToken(storageToken)
            setRole(getRole(storageToken))
        }else{
            setToken(null)
            setRole(null)
            localStorage.removeItem('token')
        }
        setLoading(false)
    },[])

    const login = (token) => {
        setToken(token)
        setRole(getRole(token))
        localStorage.setItem('token', token)
    }

    const logout = () => {
        setToken(null)
        setRole(null)
        localStorage.removeItem('token')
    }
    if(loading) {
        return <div>Loading...</div>

    }
    return(
        <AuthContext.Provider value = {{ token, role, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}