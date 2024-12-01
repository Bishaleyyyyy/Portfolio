import Navbar from './Components/Navbar.jsx'

import Home from './Components/Home.jsx'
import SocialLinks from './Components/SocialLinks.jsx'
import About from './Components/About.jsx'
import Portfolio from './Components/Portfolio.jsx'
import Experience from './Components/Experience.jsx'
import Contact from "./Components/Contact.jsx"



function App() {

  return (
   <div>
     <Navbar/>
     <Home/>
     
     <About/>
      <Portfolio/>
      <Experience/>


      <SocialLinks/>
      <Contact/>
   
   </div>
  )
}

export default App
