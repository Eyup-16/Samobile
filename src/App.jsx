import { useState } from 'react'
import NavBar from './Components/NavBar';
import ShowCase from './Components/ShowCase';
import Services from './Components/services';
function App() {
  return (
    <main>
     <NavBar/>
     <ShowCase/>
     <Services/>
    </main>
  )
}
export default App
