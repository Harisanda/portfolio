import React from 'react'
import './style/Skills.css'
import { skills } from '../utils/skills'

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
                <div className='skills'>
                <img src={skill.image} alt={skill.nom} />
                <p>{skill.nom}</p>
                </div>
            )
            })
        }
        </div>
    </section>
  )
}

export default Skills