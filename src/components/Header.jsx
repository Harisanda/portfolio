import React, { useState } from 'react'
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";
import logo from '../assets/images/Frame.svg'
import './style/Header.css';
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";


const Header = () => {
  const [isOpen,setIsOpen] = useState(false);
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setIsOpen(false);
  };
  return (
    <>
      <header className='header'>
        <nav>
          <div className='logo'>
            <img src={logo} alt="logo" />
          </div>
          <div className="menu">
            <ul>
              <li onClick={() => scrollTo("home")}>#Acceuil</li>
              <li onClick={() => scrollTo("skills")}>#Competences</li>
              <li onClick={() => scrollTo("experiences")}>#Experiences</li>
              <li onClick={() => scrollTo("projects")}>#Projets</li>
              <li onClick={() => scrollTo("contacts")}>#Contacts</li>
            </ul>
          </div>
          <div className='network'>
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/tombontsoa-harisanda-261532306/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                  </a>
              </li>
              <li>
                <a href="mailto:tombontsoaharisanda@gmail.com"
                  aria-label="Email"
                >
                  <MdEmail />
                </a>
              </li>
              <li>
                <a href="https://github.com/Harisanda"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithubSquare />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
        <div className='mobile-burger' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoClose/> : <FaBars/>}
        </div>
        {isOpen && (
          <div className="mobile-menu">
            <ul>
              <li onClick={() => scrollTo("home")}>#Accueil</li>
              <li onClick={() => scrollTo("skills")}>#Compétences</li>
              <li onClick={() => scrollTo("experiences")}>#Expériences</li>
              <li onClick={() => scrollTo("projects")}>#Projets</li>
              <li onClick={() => scrollTo("contacts")}>#Contacts</li>
            </ul>
          </div>
        )}
    </>
  )
}

export default Header