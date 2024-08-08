import React from 'react';
import "./App.css";
import Header from './components/header/header';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Schedule from './components/schedule/schedule';
import Blog from './components/blog/Blog';

const App = () => {
  return(
    <>
        <Header />
        <main className='main'>
          <Home />
          <About />
          <Services />
          <Testimonials/>
          <Contact />
          <Footer />
          <Schedule />
          <Blog />
        </main>
      </>
  )
}

export default App
