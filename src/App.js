import React from 'react'
import {About , Footer , Header  , Skills , Works , Testimonial} from "./Container"
import { Navbar } from './components'
import "./App.scss"
const App = () => {
  return (
    <div className='app bg-slate-700'>
    <Navbar/>
     <Header/>
     <About/>
     <Works/>
     <Skills/>
     <Testimonial/>
     <Footer/>
    </div>

  )
}

export default App
