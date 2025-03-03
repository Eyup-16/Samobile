import { useState } from 'react'
import NavBar from './Components/NavBar';
import ShowCase from './Components/ShowCase';
import Services from './Components/Services';
import HelpCenter from './Components/HelpCenter';
import Contact from './Components/Contact';
import About from './Components/About';
function App() {

  return (
    <main>
     <NavBar/>
     <ShowCase/>
    <Services/>
    <HelpCenter />
    <Contact/>
    <About/>
    </main>
  )
}

export default App
