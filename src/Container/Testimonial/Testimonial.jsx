import React from 'react'
import {motion} from  "framer-motion"
import {HiChevronLeft , HiChevronRight} from "react-icons/hi"
import { AppWrap, MotionWrapper } from "../../Wrapper";
import { urlFor, client } from "../../client";
import { useState , useEffect } from 'react';

import "./Testimonial.scss"
const Testimonial = () => {
  const [testimonials , setTestimonials] = useState([])
  const [brands , setBrands] = useState([])
  const [currentIndex , setCurrentIndex] = useState(0)
  useEffect(() => {
    const queryBrands = '*[_type == "brands"]';
    const queryTestimonials = '*[_type == "testimonials"]';
    client.fetch(queryBrands).then((data) => {
      setBrands(data);
    });
    client.fetch(queryTestimonials).then((data) => {
      
      setTestimonials(data);
    });

  }, []);
  const handleClick = (index) => {
    setCurrentIndex(index)
  }
  // const test = testimonials[currentIndex]
  return (
    <>
      {testimonials.length > 0 ? (
        <>
        <h2 className='head-text text-slate-700 bg-slate-300 px-12 rounded-lg' style={{marginBottom: "2rem"}}>
          Testimonials
        </h2>
          <div className="app__testimonial-item app__flex bg-slate-300 shadow-md">
            <img src={urlFor(testimonials[currentIndex].imgurl)} alt={testimonials[currentIndex].name} />
            <div className="app__testimonial-content border-l-2 border-slate-600 mx-3">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div  className=''>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex ">
            <div className="app__flex " onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      ) : null}

     { brands.length >0 ?  <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div> : null}
    </>
  )
}

export default AppWrap(MotionWrapper(Testimonial , "app_testimonials") , "testimonial")
