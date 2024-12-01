import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Navbar } from "./components/shared"
import { Login, Signup } from "./components/auth"
import Home from "./components/Home"
import { Browse, Jobs } from "./components"



const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },

  {
    path: '/login',
    element: <Login/>
  },

  {
    path: '/signup',
    element: <Signup/>
  },

  {
    path: '/jobs',
    element: <Jobs />
  },

  {
    path: '/browse',
    element: <Browse />
  }


])


function App() {
  
  return (
    <>
      <RouterProvider router = {appRouter}/>
    </>
  )
}

export default App
