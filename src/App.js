import React, { useEffect } from 'react';
import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import SocialLinks from "./Components/SocialLinks";
import Logo from "./assets/Page Logo.png"


function App() {
    useEffect(() => {
      document.title = 'SRK';
      const favicon = document.querySelector('link[rel="icon"]'); // Get the favicon link element
    favicon.href = Logo; // Set the path to your logo image
    }, []);
  return (
    <div className="">
     <Navbar/>
     <Home/>
     <About/>
     <Portfolio/>
     <Experience/>
     <Contact/>
     <SocialLinks/>
     
    </div>
  );
}

export default App;
