import React from 'react';
import "./App.css";
import Header from './components/header/header';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

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
        </main>
      </>
  )
}

export default App
