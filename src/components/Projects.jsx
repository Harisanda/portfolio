import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import './style/Projects.css'
import { data } from '../utils/data';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { FaGithub } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Projects = () => {
    const handleClick = (link) => {
        window.open(link, "_blank", "noopener,noreferrer")
    }

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
                {data.map((item, index) => {
                    const technos = item.stacks;
                    console.log(technos);
                    return (
                        <SwiperSlide key={index}>
                            <div className="card-project">
                                <div className="project-img">
                                    <img src={item.img} alt="projet-image" />
                                </div>

                                <div className="description">
                                    <h3>{item.titre}</h3>
                                    <p>{item.description}</p>
                                </div>

                                <p className='techno-title'>Technologies:</p>
                                <div className='technos-group'>
                                    {technos.map((stack,index) => {
                                        console.log(stack);
                                        return (
                                            <div key={index} className='technos'>
                                                <img src={stack.logo} alt={stack.name} />
                                                <p>{stack.name}</p>
                                            </div>
                                        )
                                    })}
                                </div>

                                <div className="btn">
                                    <button onClick={() => handleClick(item.link)}>
                                        <FaGithub/>
                                        <p>Github</p>
                                        <motion.div
                                            animate={{
                                                x: [0, 8, 0],
                                                opacity: [1, 0.3, 1],
                                            }}
                                            transition={{
                                                duration: 1.2,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                            }}
                                            style={{fontSize: "1.2rem"}}
                                        >
                                            <FaLongArrowAltRight />
                                        </motion.div>
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    )})
                }
            </Swiper>
        </div>
    </section>
  )
}

export default Projects