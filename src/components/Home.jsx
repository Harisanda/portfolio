import React from 'react'
import { MdDownload } from "react-icons/md";
import image1 from '../assets/images/image1.jpg';
import Typewriter from 'typewriter-effect'
import { motion } from 'framer-motion';
import './style/Home.css'


const Home = () => {
  const downloadFile = () => {
    const link = document.createElement("a");
    link.href = "/tombontsoa_harisanda-cv.pdf";
    link.download = "tombontsoa_harisanda-cv.pdf"
    link.click();
  }
  return (
    <section className='home' id='home'>
        <motion.div className="home-content" 
          initial={{opacity: 0, y: -100 }}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 1}}
          viewport={{amount: 0.3}}
        >
          <h1>HELLO !</h1>
          <div className='type-writer'>
            <h2>Je suis HARISANDA,</h2>
            <span className='typed-text'>
              <Typewriter 
              options={{
                strings: ['un developpeur Web.', 'un developpeur Mobile.', 'UI/UX designer.'],
                autoStart: true,
                loop: true,
              }}
              
              />
            </span>
          </div>
          <h3>
            Développeur fullstack passionné par la conception de solutions web 
            performantes et innovantes. Rigoureux et dynamique, je relève avec enthousiasme 
            les défis techniques et j’apprécie le travail en équipe pour 
            transformer des idées ambitieuses en applications concrètes et fiables.
          </h3>
          <div className='btn-down'>
              <div className='button'> 
                  <MdDownload/>
                  <p onClick={downloadFile}>Telechager mon CV</p>
              </div>
          </div>
        </motion.div>
        <div className="profil">
          <img src={image1} alt="photo de profil" />
        </div>
    </section>
  )
}

export default Home