import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Login, Signup } from "./components/auth"
import Home from "./components/Home"
import { Browse, JobDescription, Jobs, Profile } from "./components"
import Companies from "./components/admin/Companies"
import AdminJobs from "./components/admin/AdminJobs"
import CompanyCreate from "./components/admin/CompanyCreate"
import CompanySetup from "./components/admin/CompanySetup"
import PostJob from "./components/admin/PostJob"
import Applicants from "./components/admin/Applicants"
import ProtectedRoute from "./components/admin/ProtectedRoute"





const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },

  {
    path: '/login',
    element: <Login />
  },

  {
    path: '/signup',
    element: <Signup />
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
    path: "/admin/companies",
    element: <ProtectedRoute ><Companies /></ProtectedRoute>
  },

  {
    path: "/admin/jobs",
    element: <ProtectedRoute><AdminJobs /></ProtectedRoute>
  },

  {
    path: "/admin/companies/create",
    element: <ProtectedRoute><CompanyCreate /></ProtectedRoute>
  },

  {
    path: "/admin/companies/:id",
    element: <ProtectedRoute><CompanySetup /></ProtectedRoute>
  },



  {
    path: "/admin/jobs/create",
    element: <ProtectedRoute><PostJob /></ProtectedRoute>
  },

  {
    path: "/admin/jobs/:id/applicants",
    element: <ProtectedRoute><Applicants /></ProtectedRoute>
  },









])







function App() {



  return (
    <>
      <RouterProvider router={appRouter} />

    </>
  )
}

export default App
