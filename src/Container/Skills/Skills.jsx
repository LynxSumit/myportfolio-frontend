import React from "react";
import { useState, useEffect } from "react";

import { Tooltip } from "react-tooltip";
import { motion } from "framer-motion";
import { AppWrap, MotionWrapper } from "../../Wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";
const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);
  useEffect(() => {
    const query = '*[_type == "skills"]';
    const Expquery = '*[_type == "experiences"]';
    client.fetch(query).then((data) => {
      setSkills(data);
    });
    client.fetch(Expquery).then((data) => {
      // console.log(data);
      setExperiences(data);
    });
  }, []);
  return (
    <>
      <h2 className="head-text text-slate-700 bg-slate-400 px-8 rounded-lg py-3 ">Skills & <span >Experience</span></h2>
      <div className={experiences.length>0 ? "app__skills-container app__flex bg-slate-600" :`app__skills-container `}>
        <motion.div className="app__skills-list bg-slate-700 px-4 flex flex-wrap justify-center rounded-lg">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text text-slate-200">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      {   <motion.div className="app__skills-exp">
          {experiences?.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      key={work.name}
                      data-tip
                      data-for={work.name}
                      data-tooltip-id={work.name}
                      data-tooltip-html={work.desc}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                      <Tooltip id={work.name} className="skills-tooltip" />
                    </motion.div>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrapper(Skills , "app__skills")
  , "skills", "app__whitebg")
