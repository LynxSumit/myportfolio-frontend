import React from 'react'
import "./About.scss"
import { motion } from 'framer-motion'
import { useState , useEffect } from 'react'
import { client , urlFor } from '../../client'
import AppWrap from '../../Wrapper/AppWrap'
import MotionWrapper from '../../Wrapper/MotionWrapper'
const About = () => {

  const [abouts , setAbouts] = useState([])
  useEffect(()=>{
 const query = '*[_type == "abouts"]'
  client.fetch(query).then((data)=> setAbouts(data))
  } , [])
  return (
    <>
    <div className='bg-slate-400  h-full rounded-lg'>
     <h2 className=' head-text text-center text-slate-700  px-10'>Driving Digital <span >Success</span> Through Expert <span>Development</span><br/> And Seamless <span>Functionality</span></h2>
     <div className='app__profiles bg-slate-300 rounded-bottom-pill'>

      {abouts.map((about , index)=> (
        <motion.div
        whileInView={{opacity : 1}}
        whileHover={{scale : 1.1}}
        transition={{duration : .3 , type: 'tween'}}
        className='app__profile-item  rounded-sm'
        key={about.title + index}>
        <img src={urlFor(about.imgUrl)} alt={about.title}/>
        <h2 className='bold-text'>{about.title}</h2>
        <p className='p-text'>{about.description}</p>

        </motion.div>
        ))}
     </div>
     </div>
    </>
  )
}

export default AppWrap(
  MotionWrapper(About , "app__about")
  , "about", "app__whitebg")
