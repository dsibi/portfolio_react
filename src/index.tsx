import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './index.css';
import { Navbar } from './components/Navbar';
import { HeaderFilter } from './components/HeaderFilter';
import { Projects } from './components/Projects';
import { projects } from './assets/projects_list';
import { Footer } from './components/Footer';
// import { BrowserRouter, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <Routes>
  //   <BrowserRouter>
      <React.StrictMode>
        <Navbar />
        <main id="main">
          <div className="site-section site-portfolio">
            <div className="container">
              <HeaderFilter />
              <div id="portfolio-grid" className="row no-gutter" data-aos="fade-up" data-aos-delay="200">
                {projects.map((project, i) => <Projects project={project} key={i} />)}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </React.StrictMode>
  //   </BrowserRouter>
  // </Routes>
);
