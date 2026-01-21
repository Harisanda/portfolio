import './App.css';
// import { data } from './utils/data';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { Routes,Route } from 'react-router-dom';
import Header from './components/Header'
import React from "react";
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import { Services } from './components/Services';
import { Experiences } from './components/Experiences';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Header/>
      {/* <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/experiences' element={<Experiences/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
      </Routes> */}
      <Home/>
      <Skills/>
      <Experiences/>
      <Projects/>
      <Services/>
      <Contacts/>
      <Footer/>
    </>
  )
}

export default App
