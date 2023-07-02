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
     <h2 className='head-text'>Driving Digital <span>Success</span> Through Expert <span>Development</span><br/> And Seamless <span>Functionality</span></h2>
     <div className='app__profiles'>

      {abouts.map((about , index)=> (
        <motion.div
        whileInView={{opacity : 1}}
        whileHover={{scale : 1.1}}
        transition={{duration : .3 , type: 'tween'}}
        className='app__profile-item'
        key={about.title + index}>
        <img src={urlFor(about.imgUrl)} alt={about.title}/>
        <h2 className='bold-text'>{about.title}</h2>
        <p className='p-text'>{about.description}</p>

        </motion.div>
        ))}
     </div>
     
    </>
  )
}

export default AppWrap(
  MotionWrapper(About , "app__about")
  , "about", "app__whitebg")
