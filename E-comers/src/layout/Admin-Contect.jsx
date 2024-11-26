import { useEffect, useState } from "react"
import { useAuth } from "../auth/ContextApi"
import {toast} from "react-toastify"
export const Admin_Contect =() =>{
    const{AuthToken} = useAuth()
    const[message, setmessage] = useState([])

      const getAllMessage = async() =>{
        try {
            const response = await fetch("http://localhost:5000/api/admin/contect",{
                method:"GET",
                headers:{
                    Authorization: AuthToken
                }
            })
           const data = await response.json();
          setmessage(data);
            
        } catch (error) {
            console.log(error);
            
        }
      }

    const handleDelete = async(id) =>{
        try {
          const response = await fetch(`http://localhost:5000/api/admin/contect/delete/${id}`,{
            method: "DELETE",
            headers:{
                Authorization:AuthToken
            }

          })  
          const data = await response.json()
          console.log(data);
          if (response.ok) {
             toast.success('Delete Sucessfully')  
             getAllMessage() 
          }
        } catch (error) {
            console.log(error);  
        }
    }  
    useEffect(()=>{
        getAllMessage()
    },[])
    return(

        <>
        <div>
            <table>
                <thead>
           <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Message</th>
            <th>Delete</th>
            </tr>         
                </thead>

            <tbody>
                {
                    message.map((curr,index) =>{
                      return(
                        <tr key={index}>
                        <td>{curr.username}</td>
                        <td>{curr.email}</td>
                        <td>{curr.message}</td>
                        <td>  <div  onClick={()=>handleDelete(curr._id)}>Delete</div></td> 
                      </tr>
                      )  
                    })
                }
            </tbody>
            </table>
        </div>
        </>
    )
}