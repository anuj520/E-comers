import { useState } from "react"
import { useAuth } from "../auth/ContextApi"
import {toast} from "react-toastify"
export const Message = () =>{ 
    const[user,setuser] = useState({
        email: "",
        username:"",
        message:""
    })
    const{users} = useAuth(); 
    const[UserData , setUserData] = useState(true)
    if (UserData && users) {
        setuser({
            username:users.username, 
            email: users.email, 
               message:""
        })
        setUserData(false)
    }

     const handleChange = (e) =>{
        const{name,value} = e.target;
        setuser((prev)=>({...prev,[name]:value}))
     }
     const handlefromSubmit = async(e) =>{
        e.preventDefault();

        const response = await fetch('http://localhost:5000/contect/from/contect',{
            method: "POST",
            headers:{
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
          if (response.ok) {
            setuser({email: "", username: "",message: ""})
            toast.success('Message send sucessfulf')
          }
        
     }

    return(
        <>
        <section className="Contect">
            <form onSubmit={handlefromSubmit}>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter email"/>
                <label htmlFor="username">username</label>
                <input type="text" name="username"value={user.username} onChange={handleChange} placeholder="Enter username"/>
                <label htmlFor="message">Message</label>
                <input type="text" name="message" placeholder="Enter Message" required value={user.message} onChange={handleChange}/>
                <button type="submit">Submit</button>
            </form>
            <img src="https://engageanywhere.com/wp-content/uploads/2022/12/Contact-Us-scaled.jpeg" alt="" />
        </section>
        </>
    )
}