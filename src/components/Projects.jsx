import React from 'react'
import Slider from "react-slick";
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
        pauseOnHover: true 
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