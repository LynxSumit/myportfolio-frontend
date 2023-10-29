import React from 'react'
import "./Header.scss"
import { easeInOut, motion } from 'framer-motion'
import {images} from "../../Constants"
import AppWrap from '../../Wrapper/AppWrap'
const scaleVariants = {
  whileInView : {
    scale : [0,1],
    opacity : [0,1],
    transition : {
      duration : 1,
      ease : 'easeInOut'
    }
  }
}
const Header = () => {
  return (
    <div  className='app__header app__flex bg-slate-600'>
    <motion.div
    whileInView={{x : [-100 , 0] , opacity : [0 , 1]}}
    transition={{duration : 0.7}}
    className='app__header-info'>
    <div className='app__header-badge '>
    <div className='badge-cmp app__flex  bg-slate-500'>
      <span>👋</span>
      <div style={{marginLeft : 20}}>
        <p className='p-text  text-slate-300'>Hello, I am </p>
        <h1 className='head-text  text-slate-300'>Sumit </h1>
      </div>

    </div>

<div className='tag-cmp app__flex bg-slate-500'>
<p className='p-text  text-slate-300'>Web Developer</p>
<p className='p-text  text-slate-300'>Freelancer</p>

</div>
    </div>

    </motion.div>


    <motion.div
    whileInView={{ opacity : [0 , 1]}}
    transition={{duration : 0.7 , delayChildren : 0.5}}
    className='app__header-img'>
      <img src={images.profile} alt='Profile'/>
      <motion.img
         whileInView={{ scale : [0 , 1]}}
    transition={{duration : 1 , ease : easeInOut}}
    className='overlay_circle'
    src={images.circle}
    alt='overlay_circle'
      />      
    </motion.div>


    <motion.div variants={scaleVariants} whileInView={scaleVariants.whileInView} className='app__header-circles'>
{[images.react , images.redux , images.sass ].map((circle)=>(
  <div className='circle-cmp app__flex'>
    <img src={circle} alt='circle'/>
  </div>
))}
    </motion.div>
    
    </div>
  )
}

export default AppWrap(Header , 'home')
