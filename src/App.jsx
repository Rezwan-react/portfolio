import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePages from './Pages/HomePages'
import AboutPages from './Pages/AboutPages'
import SkillsPages from './Pages/SkillsPages'
import WorksPages from './Pages/WorksPages'
import ContactPages from './Pages/ContactPages'
import Layout from './layout/Layout'


function App() {









  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element = {<Layout/>}>        
          <Route index element = {<HomePages/>}/>
          <Route path='/about' element = {<AboutPages/>}/>
          <Route path='/skills' element = {<SkillsPages/>}/>
          <Route path='/works' element = {<WorksPages/>}/>
          <Route path='/contact' element = {<ContactPages/>}/>
        </Route>
      </Route>
    )
  )

  return (
    <>



      <RouterProvider router ={route}/>
    </>
  )
}

export default App
