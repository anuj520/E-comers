import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom";
import {toast} from "react-toastify"
import { useAuth } from "../auth/ContextApi";
const URL = "http://localhost:5000/api/auth/login"
export const Login = () =>{
    const{storeToken} = useAuth();
  const Navigator = useNavigate()  
 

    const[user,setuser] = useState({
        email: "",
        password:""
    })

const handleLogin =(e) =>{
    const{name,value} = e.target;
    setuser((prev)=>({...prev,[name]:value}))
}

    const handleSubmit = async(e) =>{
  e.preventDefault()
 try {
    const loginResponse = await fetch(URL,{
        method: "POST",
        headers:{
            'Content-Type' : "application/json"
        },
        body: JSON.stringify(user)
    })
const response = await loginResponse.json()
console.log(response);
 if (loginResponse) {
    storeToken(response.token)
    Navigator('/')
    toast.success('login sucessful')
 }else{
    toast.error(response.extraDetalies ? response.extraDetalies:response.msg)
 }

 } catch (error) {
    console.log('login',error);
    
 }
  
    }
    return(
        <>
  <main className="over2">
                <section className="SingnUp">
                <h1>Login</h1>
               <NavLink to={'/signUp'}> <h2>Sign.Up</h2></NavLink>
          
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Eamil</label>
                <input type="text" name="email" required placeholder=" Enter email" value={user.email} onChange={handleLogin}/>
                <label htmlFor="password">Password</label>
                <input type="text" name="password" required placeholder=" Enter password" value={ user.password} onChange={handleLogin}/>

<button type="submit">Submit</button>
<img src="1.png" className="image2" />
            </form>
        </section>
       </main>
        </>
    )
} 
