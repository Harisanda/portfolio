import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";
import logo from '../assets/images/Frame.svg'
import './style/Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const scrollTo = (id) => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    };
  return (
    <header className='header'>
      <nav>
        <div className='logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='menu'>
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
  )
}

export default Header