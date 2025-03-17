import React from 'react'
import NavBar from './Components/NavBar';
import ShowCase from './Components/ShowCase';
import Services from './Components/Service';
import HelpCenter from './Components/HelpCenter';
import Contact from './Components/Contact';
import About from './Components/About';
import Footer from './Components/Footer';
function App() {

  return (
    <main>
     <NavBar/>
     <ShowCase/>
    <Services/>
    <HelpCenter/>
    <About/>
    <Contact/>
    <Footer/>
    </main>
  )
}

export default App
