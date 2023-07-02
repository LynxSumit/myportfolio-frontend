import React from 'react'
import {BsGithub , BsInstagram , BsLinkedin  } from "react-icons/bs"
import { Link } from 'react-router-dom'

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div style={{cursor : 'pointer'}}>
      <a href='https://github.com/LynxSumit'>  <BsGithub/></a>
      </div>
      <div style={{cursor : 'pointer'}}>
        <a href='https://www.instagram.com/lynx__sumit/'><BsInstagram/></a>
      </div>
      <div style={{cursor : 'pointer'}}>
      <a href="https://www.linkedin.com/in/sumit-kumar-upadhyay-4003b4247/">  <BsLinkedin/></a>
      </div>
    </div>
  )
}

export default SocialMedia
