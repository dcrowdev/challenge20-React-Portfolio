import React, { useState } from "react";

import Header from './components/Header/index';
import About from './components/About/index';
import Project from './components/Project/index';
import Resume from './components/Resume/index';
import Contact from './components/Contact/index';
import Footer from './components/Footer/index';


import projects from "./projects";

// import { PDFDownloadLink } from "@react-18-pdf/renderer";
// import { PDFViewer } from "@react-18-pdf/renderer";

function App() {

  const [pageIndex, setPageIndex] = useState(0);

  const renderPage = () => {
    if (pageIndex === 0) {
      return <About />
    } 
    if (pageIndex === 1) {
      return <Project projects={projects}/>
    }
    if (pageIndex === 2) {
      return <Resume />
    }
    if (pageIndex === 3) {
      return <Contact />
    }
  }

  return (
     <div style={{height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Header
        showAbout={() => setPageIndex(0)}
        showProjects={() => setPageIndex(1)}
        showResume={() => setPageIndex(2)}
        showContact={() => setPageIndex(3)}
      />
      {/* {pageIndex === 0 ? (<About />)
        : pageIndex === 1 ? (<Project />)
          : pageIndex === 2 ? (<Resume />)
            : pageIndex === 3 ? (<Contact />)
      } */}
      <div style={{height: '75vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly'}}>
      {renderPage()}
      </div>
      <Footer />
      </div>
  )
}

export default App;
