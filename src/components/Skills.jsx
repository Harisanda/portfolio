import React from 'react'
import './style/Skills.css'
import { skills } from '../utils/skills'
import { easeIn, easeOut, motion } from 'framer-motion'

const Skills = () => {
  return (
    <section className='competences' id='skills'>
        <div className='skills-title'>
          <h2>MES COMPETENCES</h2>
          <div className='trait'></div>
        </div>
        <div className='skills-content'>
          {
              skills.map(skill => {
              return (
                  <motion.div className='skills'
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    viewport={{once: false}}
                    transition={{duration: .5,ease: easeIn }}
                  >
                    <img src={skill.image} alt={skill.nom} />
                    <p>{skill.nom}</p>
                  </motion.div>
              )
              })
          }
        </div>
    </section>
  )
}

export default Skills