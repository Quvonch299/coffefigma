import React from 'react'
import Main from './COMPONENTS/Main'
import Footer from './COMPONENTS/Footer'
import Navbar from './HOME/Navbar'
import { Route, Routes } from 'react-router'
import ABOUTUS from './HOME/ABOUTUS'
import CreativePlon from './HOME/CreativePlon'

export default function App() {
  return (
    <div>
<Navbar/>
<Routes>
<Route path='/'  element={<Main/>}/>
<Route path='/ABOUTUS'  element={<ABOUTUS/>}/>
<Route path='/CreativePlon' element={<CreativePlon/>}/>
</Routes>
      <Footer/>
    </div>
  )
}
