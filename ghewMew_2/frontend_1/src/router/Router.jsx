import React from 'react'
import {Routes,Route,Navigate} from "react-router-dom"
import Index from "../pages/Index"
import Shop from "../pages/Shop"
import Services from "../pages/Services"
import About from "../pages/About"
import Blog from "../pages/Blog"
import Checkout from "../pages/Checkout"
import Contact from "../pages/Contact"
import Thankyou from "../pages/Thankyou"





const Router = () => {
  return (
    <Routes> 
        <Route path="/" element={<Navigate to= "/home"/>}/>
        <Route path="/home" element={<Index  />}/>


        
        <Route path="/shop" element={<Shop  />}/>
        <Route path="/services" element={<Services  />}/>
        <Route path="/about" element={<About  />}/>
        <Route path="/blog" element={<Blog  />}/>
        <Route path="/checkout" element={<Checkout  />}/>
        <Route path="/contact" element={<Contact  />}/>
        <Route path="/thankyou" element={<Thankyou  />}/>
        

    </Routes>


  )
}

export default Router