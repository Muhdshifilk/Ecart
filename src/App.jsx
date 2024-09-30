import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import Home from './Pages/Home'
import View from './Pages/View'
import Wish from './Pages/Wish'
import Cart from './Pages/Cart'
import { Route,Routes } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/view/:id' element={<View/>}/>
        <Route path='/wish' element={<Wish/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer />
      <ToastContainer/>
    </>
  )
}

export default App
