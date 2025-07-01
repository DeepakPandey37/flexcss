import React from 'react'
import Navbar from './components/common/Navbar'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import Home from './components/Home'
import Previewbg from './Previewbg'
import { Toaster } from 'sonner'
import About from './components/common/About'
import GradiantSpecific from './components/GradiantSpecific'




const App = () => {
  const appRouter = createBrowserRouter([
    { path: "/" ,
     element: <Home/>,
    },
    { path: "/previewbg" ,
     element: <Previewbg/>,
    },
    {
      path:"/about",
      element: <About/>
    },
    {
      path:"/gradients",
      element:<GradiantSpecific/>
    }
  ])
  
      return (
        <>
         <Toaster richColors position="bottom-right" />
        <RouterProvider router = {appRouter}/>
      

        </>
  )
}

export default App