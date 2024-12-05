import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Navbar } from "./components/shared"
import { Login, Signup } from "./components/auth"
import Home from "./components/Home"
import { Browse, Jobs, Profile } from "./components"



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
    path: '/description/:id',
    element: <JobDescription />
  },

  {
    path: '/browse',
    element: <Browse />
  },

  {
    path: '/profile',
    element: <Profile />
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
