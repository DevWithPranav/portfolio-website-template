import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import FullPage from './components/FullPage/FullPage.jsx'
import Projects from './components/Projects/Projects.jsx'
import Experience from './components/Experience/Experience.jsx'
import Contact from "./components/Contacts/Contact.jsx"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App></App>}>
    <Route path='' element={<FullPage/>}/>
    <Route path='home' element={<Home/>}/>
    <Route path='projects' element={<Projects/>}/>
    <Route path='experience' element={<Experience/>}/>
    <Route path='contact' element={<Contact/>}/>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
