import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Navbar } from "./components/shared"
import { Login, Signup } from "./components/auth"
import Home from "./components/Home"
import { Jobs } from "./components"

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
