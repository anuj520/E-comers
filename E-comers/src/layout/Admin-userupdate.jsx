import { useEffect, useState } from "react"
import { useAuth } from "../auth/ContextApi"
import { useParams } from "react-router-dom"
import { toast} from "react-toastify"

export const Userupdate =()=>{
    const{AuthToken} = useAuth()
    const params = useParams();

    const[User,setUser] = useState({
        username:"",
        email:"",
       phone:""
    })
    
   const getaSingleUser = async() =>{
    try {
        const response = await fetch(`http://localhost:5000/api/admin/users/${params.id}`,{
            method: "GET",
            headers:{
                Authorization:AuthToken
            }
        })
        const data = await response.json();
    setUser(data);
        

    } catch (error) {
        console.log("getasingleUser",error);
        
    }
   }

    const handleInChange = (e) =>{
        const{name,value} = e.target;
        setUser((prev) => ({...prev,[name]:value}))
    }
    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
            const responce = await fetch(`http://localhost:5000/api/admin/users/update/${params.id}`,{
                method: "PATCH",
                headers:{
                    "Content-Type" :"application/json",
                Authorization :AuthToken
                },
                body: JSON.stringify(User)
            })
            console.log(responce);
            
            if (responce.ok) {
                toast.success('Update Sucessful')
            }else{
                toast.error('Not update')
            }
        } catch (error) {
            console.log(error);
            
        }
    

    }

    useEffect(()=>{
        getaSingleUser()
    },[])
    return(
        <>
        <section>
        <div>
            <h1>Update User Data</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="uername">
                <b>Username</b>
                <input type="text" name="username" id="username" value={User.username} onChange={handleInChange} />
            </label>
            <label htmlFor="Uername">
                <b>Email</b>
                <input type="text" name="email" id="email" value={User.email} onChange={handleInChange} />
            </label>
            <label htmlFor="Uername">
                <b>Mobile</b>
                <input type="text" name="phone" 
                id="phone" value={User.phone} 
                onChange={handleInChange} 
                className="phone"   required/>
            </label>
            <button type="submit">Update</button>
        </form>
        </div>
        </section>
        </>
    )
} 