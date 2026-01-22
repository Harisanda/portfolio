import React, { useEffect, useRef } from 'react'
import Slider from "react-slick";
import { Swiper, SwiperSlide } from 'swiper/react';
import './style/Projects.css'
import { data } from '../utils/data';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";


const Projects = () => {

  return (
    <section className='projects' id='projects'>
        <h2>PROJETS</h2>
        <div className="projects-content">
            <Swiper 
                modules={[ Autoplay]}
                spaceBetween={20}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="card-project">
                                <div className="project-img">
                                    <img src={item.img} alt="projet-image" />
                                </div>

                                <div className="description">
                                    <h3>{item.titre}</h3>
                                    <p>{item.description.slice(0, 130)}...</p>
                                </div>

                                <div className="btn">
                                    <button>Voir plus</button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </section>
  )
}

export default Projects