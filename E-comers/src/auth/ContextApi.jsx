import { createContext, useContext, useEffect, useRef, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({children}) =>{
const[token , settoken] = useState(localStorage.getItem('token'));
const[users,setuser] = useState("")
const[loading,setloading] = useState(true)
const storeToken = (serverToken) =>{
settoken(serverToken)
return localStorage.setItem("token",serverToken);
}

const LogIn = !!token;

const LogOut = () =>{
  settoken('');
  return localStorage.removeItem('tolen')  
}
//jwt authenticatio to get currntely get user data

const AuthToken = `Bearer ${token}`

const UserAuthentication = async() =>{
try {
    const response = await fetch("http://localhost:5000/api/auth/user",{
        method : "GET",
        headers: {
        Authorization: AuthToken
        }
    })
    if (response.ok) {
      const data = await response.json();
      console.log(data.userData);
       setuser(data.userData) 
       setloading(false)
    }
} catch (error) {
    console.error('ERROR FECHING DATA');
}
}

useEffect(()=>{
    UserAuthentication();
},[])

const scrollref = useRef(null)    
const scrollref2 = useRef(null) 

const handleleft = () =>{
    if (scrollref) {
        scrollref.current.scrollLeft -= 330;
    console.log('lf');
    
    }    
    }
const handleRight = () =>{
if (scrollref.current) {
    scrollref.current.scrollLeft += 330;
    console.log("ri");
    
}    
}
const handleleft2 = () =>{
    if (scrollref2) {
        scrollref2.current.scrollLeft -= 350;
    console.log('lf');
    
    }    
    }
const handleRight2 = () =>{
if (scrollref2.current) {
    scrollref2.current.scrollLeft += 350;
    console.log("ri");
    
}    
}

return( <AuthContext.Provider 
value={{handleRight,handleleft,scrollref,handleRight2,handleleft2,
scrollref2, storeToken,token,LogIn,users,LogOut,loading,AuthToken}}>{children}
</AuthContext.Provider>
)}

export const useAuth = () =>{

const AuthContextValue = useContext(AuthContext)

if (!AuthContextValue) {
   throw new error('context Api fail')   
}
return AuthContextValue    
}
