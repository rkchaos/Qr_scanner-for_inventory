import React from 'react'
import{Routes,Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Form from './pages/Form'
export default function App() {
  return (
    <Routes>
<Route element={<Form/>} path='/'/>
    </Routes>
    
  )
}
