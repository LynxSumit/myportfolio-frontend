import React from 'react'
import {AppWrap , MotionWrapper} from "../../Wrapper"
import {client , urlFor} from "../../client"
import { useState , useEffect } from 'react'
import { images } from '../../Constants'
import "./Footer.scss"
const Footer = () => {
 const [formData , setFormData] = useState({Name :"" , email : "" , message : '' })
 const [formSubmitted , setFormSubmitted] = useState(false)
 const [loading , setLoading] = useState(false)
 const {Name,  email, message} = formData

  // const handleChange  = (e) => {
  //   const {Name , value} = e.target
  //   setFormData({...formData , [Name] : value})
  // }
  const handleButton  = () => {
    setLoading(true)
    const contact = {
      _type: 'contact',
      name : Name,
      email : email , 
      message : message
    }
    client.create(contact).then(()=> {
      setLoading(false)
      setFormSubmitted(true)

    })
  }
  return (
    <>
     <h2 className='head-text'>
      Take a coffee & chat with me
     </h2>

     <div className='app__footer-cards'>
      <div className='app__footer-card'>
        <img src={images.email} alt='email'/>
        <a href='mailto:skumarupadhyay1@gmail.com' className='p-text'> skumarupadhyay@gmail.com </a>
      </div>
      <div className='app__footer-card'>
        <img src={images.mobile} alt='mobile'/>
        <a href='tel: +919142581699' className='p-text'> +919142581699 </a>
      </div>
     </div>
    {
      !formSubmitted ?  <div className='app__footer-form app__flex'>
     <div className='app__flex'>
      <input type='text' className='p-text'placeholder='Your Name' name={Name}  value={Name} onChange={(e) => setFormData({Name : e.target.value } )}/>
     </div>
     <div className='app__flex'>
      <input type='email' name={email} onChange={(e) => setFormData({email : e.target.value } )}  className='p-text'placeholder='Your Email' value={email} />
     </div>
     <div>
      <textarea
      className='p-text'
      placeholder='Your Message'
      name={message}
      value={message}
      onChange={(e) => setFormData({message : e.target.value } )}
      />      
     </div>
     <button type='button' className='p-text' onClick={handleButton}>{loading ? "Loading" :   "Send Message" }</button>
      </div> : <div>
        <h3 className='head-text'>
          Thank you for getting in touch !
        </h3>
      </div>
    }
    </>
  )
}

export default AppWrap(MotionWrapper(Footer , "app__footer") ,"footer" , "app__whitebg" )
