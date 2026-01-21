import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import './style/Contacts.css'
import Footer from './Footer';
import { div } from 'framer-motion/client';

function Contacts() {
  return (
    <section className='contacts' id='contacts'>
        <h2>CONTACTEZ - MOI</h2>
          {/* <div className='trait'></div> */}
        <div className="contact-content">
          <div className='form-contact'>
              <form>
                  <div class="input-box">
                    <label class="name" for="name">Nom</label>
                    <input class="field" id="name" name="name"placeholder='Votre nom' required />
                  </div>
                  <div class="input-box">
                    <label class="email" for="email">Email</label>
                    <input class="field" id="email" name="email" placeholder='Votre email' required />
                  </div>
                  <div class="input-box">
                    <label class="message" for="message">Message</label>
                    <textarea class="field area" id="message" name="message" placeholder='Ici votre message' required></textarea>
                  </div>
                  <div class="input-btn">
                    <button class="btn-submit" type="submit">
                      <p>Envoyer</p>
                      <IoIosSend />
                    </button>
                  </div>
              </form>
          </div>
          <div className="address">
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
          </div>
        </div>
    </section>
  )
}

export default Contacts