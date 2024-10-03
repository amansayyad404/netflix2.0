import React from 'react'
import { createBrowserRouter ,RouterProvider} from "react-router-dom" //for routes
import Login from "./Login.js"
import Browse from './Browse.js';


const appRouter = createBrowserRouter([ //first we create routes then we provide them in body
  {
      path:"/",
      element:<Login/>
  },
  {
    path:"/browse",
    element:<Browse/>
  }
]);



const Body = () => {

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
