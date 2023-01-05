import React, { useState } from "react";

import Header from './components/Header/index';
import About from './components/About/index';
import Project from './components/Project/index';
import Contact from './components/Contact/index';
import Footer from './components/Footer/index';

import './App.css'
import projects from "./projects";


function App() {
  // const [bgState, setBgState] = useState(bgOne)

  const [pageIndex, setPageIndex] = useState(0);

  const renderPage = () => {
    if (pageIndex === 0) {
      return <About />
    } 
    if (pageIndex === 1) {
      return <Project projects={projects}/>
    }
    if (pageIndex === 2) {
      return <Contact />
    }
  }

  const renderBg = () => {
    if (pageIndex === 0) {
      return 'bgOne';
    } 
    if (pageIndex === 1) {
      return 'bgTwo';
    }
    if (pageIndex === 2) {
      return 'bgThree';
    }
  }
  

  return (
    <div className={renderBg()} style={{height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Header
        showAbout={() => setPageIndex(0)}
        showProjects={() => setPageIndex(1)}
        showContact={() => setPageIndex(2)}
      />
      {renderPage()}
      <Footer />
      </div>
  )
}

export default App;
