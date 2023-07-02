import React from 'react'
import {BsGithub , BsInstagram , BsLinkedin  } from "react-icons/bs"

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div style={{cursor : 'pointer'}}>
        <BsGithub/>
      </div>
      <div style={{cursor : 'pointer'}}>
        <BsInstagram/>
      </div>
      <div style={{cursor : 'pointer'}}>
        <BsLinkedin/>
      </div>
    </div>
  )
}

export default SocialMedia
