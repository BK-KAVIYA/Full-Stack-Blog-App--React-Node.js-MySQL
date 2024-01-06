import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
   const [curentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null)

   const login=async (inputs)=>{
       try {
            const res = await axios.post('/auth/login', inputs)
            setCurrentUser(res.data)
       } catch (error) {
           console.log(error)
       }
    };

    const logout=async ()=>{
        try {
             await axios.post('/auth/logout')
             setCurrentUser(null)
        } catch (error) {
            console.log(error)
        }
     };

     useEffect(() => {
        localStorage.setItem("user", JSON.stringify(curentUser))
     }, [curentUser]);

    return (
        <AuthContext.Provider value={{curentUser, login, logout}}>
            {children}
        </AuthContext.Provider>
    );

}