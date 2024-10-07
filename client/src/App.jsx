import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Payment from './Payment'
import Transactions from './Transactions'


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Signup />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/payment" element={<Payment />}></Route>
      <Route path="/transactions" element={<Transactions />}></Route>
      </Routes>
      </BrowserRouter>
  )
}

export default App
