import React, { useState } from "react";

import Header from './components/Header/index';
import About from './components/About/index';
import Project from './components/Project/index';
import Contact from './components/Contact/index';
import Footer from './components/Footer/index';
import bgOne from './images/background1.jpg'
import bgTwo from './images/background4.jpg';
import bgThree from './images/background5.jpg';

import './App.css'
import projects from "./projects";


function App() {
  const bgTwoo = './images/background4.jpg'
  const [bgState, setBgState] = useState(bgOne)

  const [pageIndex, setPageIndex] = useState(0);

  const renderPage = () => {
    if (pageIndex === 0) {
      return <About />
    } 
    if (pageIndex === 1) {
      setBgState(bgTwo)
      return <Project projects={projects}/>
    }
    if (pageIndex === 2) {
      setBgState(bgThree)
      return <Contact />
    }
  }
  

  return (
    <div style={{background: `url(${bgState})`, backgroundSize: 'cover', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Header
        showAbout={() => {setBgState(bgOne); setPageIndex(0)}}
        showProjects={() => {setBgState(bgTwoo); setPageIndex(1)}}
        showContact={() => {setBgState(bgThree); setPageIndex(2)}}
      />
      {renderPage()}
      <Footer />
      </div>
  )
}

export default App;
