import { useEffect, useState } from "react"
import { useAuth } from "../auth/ContextApi"
import { NavLink } from "react-router-dom"

export const UserDetalish = () =>{
    const{AuthToken} = useAuth()
    const[alluers , setallusers] = useState([])

    const getuserData = async() =>{
      try {
        const response = await fetch('http://localhost:5000/api/admin/users',{
            method: "GET",
            headers:{
                Authorization:AuthToken
            }
        })
        const data = await response.json()
        setallusers(data)
      } catch (error) {
        console.log("getuserData" , error);
        
      }  
    }
const handleDelete = async(id) =>{
    try {
        const response = await fetch(`http://localhost:5000/api/admin/user/delete/${id}`,{
          method: "DELETE",
            headers:{
                Authorization:AuthToken
             }
        })
        const data = await response.json() 
        console.log(data);

        if (response.ok) {
            getuserData()
        }
        
    } catch (error) {
        console.log("handleDelete" , error); 
    }
}


useEffect(()=>{
  getuserData()  
},[])
    return(
        <>
        <div>
        <table>
        <thead>
        <tr>
        <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Update</th>
            <th>Delete</th>

        </tr>
        </thead>
        <tbody>
         {alluers.map((curr,index)=>{
            return(
                <tr key={index}>
                 <td>{curr.username}</td>
                 <td>{curr.email}</td>
                 <td>{curr.phone}</td>
                 <td>  <NavLink to={`/admin/users/${curr._id}/edit`}><div>Edit</div></NavLink>  </td>
                 <td>  <div onClick={()=>handleDelete(curr._id)}>Delete</div></td> 
                </tr>
            )
         })}
        </tbody>
            </table>
        </div>
        </>
    )
}