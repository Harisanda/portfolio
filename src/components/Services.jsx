import React from 'react'
import './style/Services.css'
import { FaLaptopCode } from "react-icons/fa";
import { TbDeviceMobileCode } from "react-icons/tb";
import { TbSettingsCode } from "react-icons/tb";



export const Services = () => {
  return (
    <section className='services' id='services'>
        <h2>Services</h2>
        <div className="services-content">
            <div className='card-services'>
                <div className='icon'>
                    <FaLaptopCode />
                </div>
                <h3 className='title'>Web developpement</h3>
                <p>
                    Je conçois des interfaces web modernes, responsives et intuitives,en respectant les bonnes pratiques du développement frontend.
                </p>
            </div>
            <div className='card-services'>
                <div className='icon'>
                    <TbDeviceMobileCode />
                </div>
                <h3 className='title'>Mobile developpement</h3>
                <p>
                    Je développe des applications mobiles simples, performantes et ergonomiques,adaptées aux besoins des utilisateurs et compatibles Android et iOS.
                </p>
            </div>
            <div className='card-services'>
                <div className='icon'>
                    <TbSettingsCode />
                </div>
                <h3 className='title'>back-end developpement</h3>
                <p>
                    Je conçois des APIs robustes et bien structurées,permettant la gestion des données, des utilisateurs et de la logique métier.
                </p>
            </div>
        </div>
    </section>
  )
}
