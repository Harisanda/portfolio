import React from 'react'
import { MdDownload } from "react-icons/md";
import image1 from '../assets/images/image1.jpg';
import './style/Home.css'


const Home = () => {
  return (
    <section className='home' id='home'>
        <div className="home-content">
          <h1>HEY..</h1>
          <h1>Bienvenu sur mon portfolio</h1>
          <h3>Je suis un developpeur web & mobile, passione et envie d'apprendre</h3>
          <div className='btn-down'>
              <div className='button'> 
                  <MdDownload/>
                  <p>Telechager mon CV</p>
              </div>
          </div>
        </div>
        <div className="profil">
          <img src={image1} alt="photo de profil" />
        </div>
    </section>
  )
}

export default Home