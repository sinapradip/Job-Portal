import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Login, Signup } from "./components/auth"
import Home from "./components/Home"
import { Browse, JobDescription, Jobs, Profile } from "./components"
import Companies from "./components/admin/Companies"
import AdminJobs from "./components/admin/AdminJobs"
import CompanyCreate from "./components/admin/CompanyCreate"
import CompanySetup from "./components/admin/CompanySetup"





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
  },

  // for admin

  {
    path:"/admin/companies",
    element: <Companies/>
  },

  {
    path:"/admin/jobs",
    element:<AdminJobs/>
  },

  {
    path:"/admin/companies/create",
    element: <CompanyCreate/>
  },

  {
    path:"/admin/companies/:id",
    element:<CompanySetup/>
  },

  
  

  





])







function App() {

  
  
  return (
    <>
      <RouterProvider router = {appRouter}/>
      
    </>
  )
}

export default App
