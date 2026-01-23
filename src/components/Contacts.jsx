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
import { ToastContainer, toast, Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contacts() {
  const form = useRef();
  const [loading,setLoading] = useState(false);
  const [data,setData] = useState({
    user_name: "",
    user_email: "",
    message: ""
  });
  const [errors,setErrors] = useState({});

  const notify = () => toast.success('Email bien envoye', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const validate = () => {
    const newError = {}
    const email = data.user_email.trim();

    if (!data.user_name.trim()) {
      newError.name = "Le nom est obligatoire."
    }

    if (!data.message.trim()) {
      newError.message = "Le message ne peut pas etre vide."
    }

    if (!data.user_email.trim()) {
      newError.email = "L'email est obligatoire"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      newError.email = "Email invalide."
    }

    setErrors(newError);
    
    return Object.keys(newError).length === 0;
  }
  
  const sendEmail = (e) => {
    e.preventDefault();

    if (!validate()) return ;

    setLoading(true);

    emailjs
          .sendForm('service_bsvmn88','template_cswfpqw',form.current,{
            publicKey: 'PyAAsgXQqgiskuBnx'
          })
          .then(
            () => {
              setData({user_name: "",user_email: "", message: ""});
              notify();
              setTimeout(() => {
                form.current.reset();
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
                  <label className="name" for="name">Nom</label>
                  <input className="field" 
                          id="name" 
                          name="user_name"
                          placeholder='Votre nom'
                          onChange={handleChange}
                  />
                  {errors.name && <p className='error'>{errors.name}</p>}
                </div>
                <div class="input-box">
                  <label className="email" for="email">Email</label>
                  <input className="field" 
                          id="email" 
                          name="user_email" 
                          placeholder='Votre email' 
                          onChange={handleChange}
                  />
                  {errors.email && <p className='error'>{errors.email}</p>}
                </div>
                <div class="input-box">
                  <label className="message" for="message">Message</label>
                  <textarea className="field area"
                            id="message" 
                            name="message" 
                            placeholder='Ici votre message' 
                            onChange={handleChange}
                  >
                  </textarea>
                  {errors.message && <p className='error'>{errors.message}</p>}
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
        <ToastContainer 
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
    </section>
  )
}

export default Contacts