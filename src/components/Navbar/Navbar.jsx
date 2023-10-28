import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { images } from '../../Constants';
import './Navbar.scss';
// import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
   
    <nav className="flex h-24 bg-gray-900 text-white sticky ">
      <div className="app__navbar-logo">
      <div  className='mx-5 uppercase flex my-2 '>SUMIT</div>
      </div>
      <ul className="app__navbar-links text-slate-400 ">
        {['home', 'about', 'works', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text text-slate-200 text-lg capitalize" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu ml-8 my-auto">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {/* <h6 onClick={() => setToggle(true)}>Do it</h6> */}

        {toggle && (
          <motion.div
          className='bg-slate-400 '
            //  whileInView={{ x: [300, 0] }}
            // transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'works', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} className='text-slate-700' onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;