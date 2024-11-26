import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { GetStarted } from "./StartingITEM/GetStarted"
import { SignUp } from "./User/SignUp"
import { Login } from "./User/LoginUp"
import { User } from "./User/user"
import { Message } from "./User/Message"
import { Admin_layout } from "./layout/Admin-layout"
import { UserDetalish } from "./layout/User"
import { Admin_Contect } from "./layout/Admin-Contect"
import { Userupdate } from "./layout/Admin-userupdate"

export const App = () =>{
  const router = createBrowserRouter([
    {
      path: '/',
      element:<GetStarted/>
    },
    {
      path: '/signUp',
      element: <SignUp/>
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/user',
      element: <User/>
    },
    {
      path: '/message',
      element: <Message/>
    },
    {
      path: '/Admin',
      element: <Admin_layout/>,
      children:[
        {
          path: 'userDetalish',
          element: <UserDetalish/>
        },
        {
          path:"contect",
          element: <Admin_Contect/>
        }
      ]
    },{
      path:"/admin/users/:id/edit",
      element:<Userupdate/>
    }
  ])

  return(
    <RouterProvider router={router}></RouterProvider>
  )
}


