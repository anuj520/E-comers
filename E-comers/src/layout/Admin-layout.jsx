import { Navigate, Outlet,NavLink } from "react-router-dom"
import { useAuth } from "../auth/ContextApi"
import { FaUser, FaHome  } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";


export const Admin_layout = () =>{
    const{users , loading} = useAuth()
    if (loading) {
        return <h1>Loading...</h1>
    }
    if (!users.isAdmin) {
       <Navigate to={'/'}></Navigate> 
    }
    return(
        <>
 <header>
            <div className="container">
              <nav >
                <ul >
                 <NavLink to={'userDetalish'}> <li> <FaUser /> User</li></NavLink> 
             <NavLink to={'contect'}>  <li> <AiFillMessage/> Contect</li></NavLink> 
               <NavLink to={'/'}><li> <FaHome/> Home</li></NavLink> 
                    </ul>
                    
                    </nav>  
            </div>
        </header>
        <Outlet/>
        </>
    )
}