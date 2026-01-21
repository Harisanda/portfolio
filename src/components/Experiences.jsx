import React from 'react'
import './style/Experiences.css';
import { MdOutlineWorkOutline } from "react-icons/md";
// import { Chrono } from 'react-chrono';
import { diplomas } from '../utils/diploma';
// import { DiProlog } from 'react-icons/di';



export const Experiences = () => {
  return (
    <section className='experiences' id='experiences'>
        <div className='skills-title'>
          <div className='trait'></div>
          <div className='xp-title'>
            <h2>EXPERIENCES</h2>
            <MdOutlineWorkOutline />
          </div>
        </div>
        <div className='xp-content'>
            <div className='card-xp'>
                <div className='card-xp-title'>
                    <h2>Developpeur React & Django</h2>
                </div>
                <div className='card-xp-subtitle'>
                    <p>Smart Enterprise</p>
                    <p>02/2023 - 08/2023</p>
                </div>
                <div className="card-xp-content">
                    <p>Developpement d'une application e-learning "steedy", facilitant l'acces aux ressources pedagogiques via une interface moderne et intuitive.</p>
                    <div className='stack-list'>
                        <p>React</p>
                        <p>Django</p>
                        <p>Postgresql</p>
                        <p>Material UI</p>
                    </div>
                </div>
            </div>
            <div className='card-xp'>
                <div className='card-xp-title'>
                    <h2>Developpeur React & Django</h2>
                </div>
                <div className='card-xp-subtitle'>
                    <p>Smart Enterprise</p>
                    <p>02/2023 - 08/2023</p>
                </div>
                <div className="card-xp-content">
                    <p>Developpement d'une application e-learning "steedy", facilitant l'acces aux ressources pedagogiques via une interface moderne et intuitive.</p>
                    <div className='stack-list'>
                        <p>React</p>
                        <p>Django</p>
                        <p>Postgresql</p>
                        <p>Material UI</p>
                    </div>
                </div>
            </div>
            <div className='card-xp'>
                <div className='card-xp-title'>
                    <h2>Developpeur React & Django</h2>
                </div>
                <div className='card-xp-subtitle'>
                    <p>Smart Enterprise</p>
                    <p>02/2023 - 08/2023</p>
                </div>
                <div className="card-xp-content">
                    <p>Developpement d'une application e-learning "steedy", facilitant l'acces aux ressources pedagogiques via une interface moderne et intuitive.</p>
                    <div className='stack-list'>
                        <p>React</p>
                        <p>Django</p>
                        <p>Postgresql</p>
                        <p>Material UI</p>
                    </div>
                </div>
            </div>
            <div className='card-xp'>
                <div className='card-xp-title'>
                    <h2>Developpeur React & Django</h2>
                </div>
                <div className='card-xp-subtitle'>
                    <p>Smart Enterprise</p>
                    <p>02/2023 - 08/2023</p>
                </div>
                <div className="card-xp-content">
                    <p>Developpement d'une application e-learning "steedy", facilitant l'acces aux ressources pedagogiques via une interface moderne et intuitive.</p>
                    <div className='stack-list'>
                        <p>React</p>
                        <p>Django</p>
                        <p>Postgresql</p>
                        <p>Material UI</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='formation'>
            <div className='timeline'>
                {
                    diplomas.map((diploma,index) => {
                        const Icon = diploma.icon;
                        return (
                            <div className={`f-container ${diploma.position}`}  key={index}>
                                <i><Icon/></i> 
                                <div className='text-box'>
                                    <h2>{diploma.cardTitle}</h2>
                                    <small>{diploma.title} - {diploma.cardSubtitle}</small>
                                    <p>{diploma.description}</p>
                                    <span className={`${diploma.arrow}`}></span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}
