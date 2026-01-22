import React, { useEffect, useRef } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style/Projects.css'
import { data } from '../utils/data';


const Projects = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive : [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };

  return (
    <section className='projects' id='projects'>
        <h2>PROJETS</h2>
        <div className="projects-content">
            <Slider {...settings}>
            {
                data.map(item => (
                
                    <div className='card-project'>
                        <div className='project-img'>
                            <img src={item.img} alt="projet-image"/>
                        </div>
                        <div className='description'>
                            <h3>{item.titre}</h3>
                            <p>{item.description.slice(0,130)}...</p>
                        </div>
                        <div className='btn'>
                            <button>Voir plus</button>
                        </div>
                    </div>
                ))
            }
            </Slider>
        </div>
    </section>
  )
}

export default Projects