import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom";
import {toast} from "react-toastify"
import { useAuth } from "../auth/ContextApi";
const URL = "http://localhost:5000/api/auth/signUp"

export const SignUp = () =>{
 const navigator = useNavigate()   
const{storeToken} = useAuth();

const[user,setuser] = useState({
    username:"",
    email:"",
    password:"",
    phone:""

})    

const handleInputChange = (e) =>{
    const{name, value} = e.target;
    setuser((prev)=> ({...prev,[name]:value}))
}

const handleSsubmit = async(e) =>{
  e.preventDefault();
 try {
    const Signupresponse = await fetch(URL,{
      method: "POST",
      headers:{
      'Content-Type': 'application/json'  
      },  
      body: JSON.stringify(user)
    })
     const response = await Signupresponse.json()
     console.log(response);

     if (Signupresponse.ok) {
        storeToken(response.token)
        navigator('/')
      toast.success('SinUp Suceefully')
     }else{
        toast.error(response.extraDetalies ? response.extraDetalies:response.msg)
     }
 } catch (error) {
    console.log("SignUp", error);
 }
}


    return(
        <main className="over">
                <section className="SingnUp">
                <h1>Sign.Up</h1>
                <NavLink to={'/login'}> <h2>Login</h2> </NavLink>    
            <form onSubmit={handleSsubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" required placeholder=" Enter username" value={user.username} onChange={handleInputChange}/>
                <label htmlFor="email">Eamil</label>
                <input type="text" name="email" required placeholder=" Enter email" value={user.email} onChange={handleInputChange} />
                <label htmlFor="password">Password</label>
                <input type="text" name="password" required placeholder=" Enter password" value={user.password} onChange={handleInputChange}/>
                <label htmlFor="phone">Phone</label>
                <input type="text" name="phone" required placeholder=" Enter phone" value={user.phone} onChange={handleInputChange}/>

<button type="submit">Submit</button>
<img src="1.png" className="image1" />
            </form>
        </section>
       </main>
    )
}