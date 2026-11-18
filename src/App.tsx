import {Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './compopnent/Login'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './compopnent/ProtectedRoute'
import ProtectedLayout from './compopnent/ProtectedLayout'

function App() {

  return (

    <div className='container-fluid'>
       <Routes>
        <Route path="/" element={<Login/>}/>

        <Route element={<ProtectedRoute />}>

           <Route element={<ProtectedLayout/>}>
             <Route path="dashboard" element={<Dashboard/>}/>
           </Route>
        </Route>
      </Routes>
    </div>
     

  )
}

export default App
