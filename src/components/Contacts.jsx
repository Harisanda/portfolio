import React, { useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import './style/Contacts.css';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Loader from 'react-js-loader';

function Contacts() {
  const form = useRef();
  const [loading,setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
          .sendForm('service_bsvmn88','template_cswfpqw',form.current,{
            publicKey: 'PyAAsgXQqgiskuBnx'
          })
          .then(
            () => {
              form.current.reset();
              setTimeout(() => {
                setLoading(false);
              }, 2000);
              console.log('SUCCESS')
            },
            (error) => {
              setLoading(false)
              console.log('FAILED...', error.text)
            }
          );
  }
  return (
    <section className='contacts' id='contacts'>
        <h2>CONTACTEZ - MOI</h2>
          {/* <div className='trait'></div> */}
        <div className="contact-content">
          <motion.div className='form-contact'
                      initial={{opacity:0, x:-100}}
                      whileInView={{opacity:1, x:0}}
                      transition={{
                        duration: 1, 
                        ease: "easeInOut",
                        type:"spring",
                        stiffness: 500,
                        damping: 10
                      }}
                      viewport={{once: false, amount:0.3}}
          >
            <form ref={form} onSubmit={sendEmail}>
                <div class="input-box">
                  <label class="name" for="name">Nom</label>
                  <input class="field" id="name" name="user_name"placeholder='Votre nom' required />
                </div>
                <div class="input-box">
                  <label class="email" for="email">Email</label>
                  <input class="field" id="email" name="user_email" placeholder='Votre email' required />
                </div>
                <div class="input-box">
                  <label class="message" for="message">Message</label>
                  <textarea class="field area" id="message" name="message" placeholder='Ici votre message' required></textarea>
                </div>
                <input type='hidden' name='time' value={new Date().toLocaleString('fr-FR')}/>
                <div class="input-btn">
                  <button class="btn-submit" type="submit" disabled={loading}>
                    {loading ? 
                      (
                        <>
                          <Loader className="loader" type="spinner-circle" size={40} bgColor="#001D3D" color="#001D3D"/>
                          <p className='loading' >Envoi...</p>
                        </>
                      )
                      :
                      (
                        <>
                          <p className='sending'>Envoyer</p>
                          <IoIosSend />
                        </>
                      )
                    }
                  </button>
                </div>
            </form>
          </motion.div>
          
          <motion.div className="address"
                      initial={{opacity:0, x:100}}
                      whileInView={{opacity:1, x:0}}
                      transition={{
                        duration: 1, 
                        ease: "easeInOut",
                        type:"spring",
                        stiffness: 500,
                        damping: 10
                      }}
                      viewport={{once: false, amount:0.3}}
          >
              <h3>Mes coordonnes</h3>
              <div className='address-list'>
                <div className='contact-list'>
                  <FaSquareWhatsapp />
                  <p>+261 38 36 664 54</p>
                </div>
                <div className='contact-list'>
                  <MdAlternateEmail />
                  <p>tombontsaharisanda@gmail.com</p>
                </div>
                <div className='contact-list'>
                  <FaLocationDot />
                  <p>Ankatso,Antananarivo Madagascar</p>
                </div>
              </div>
          </motion.div>
        </div>
    </section>
  )
}

export default Contacts