import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Navbar } from "./components/shared"
import { Login, Signup } from "./components/auth"
import Home from "./components/Home"

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
