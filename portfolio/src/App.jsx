import React from 'react'
import Navbar from './sections/navbar/Navbar'
import About from './sections/about/About'
import Portfolio from './sections/portfolio/Portfolio'
import Footer from './sections/footer/Footer'
import Contact from './sections/contact/Contact'
import Header from './sections/header/header'
import Skills from './sections/skills/Skills'
function App() {
  return (
   <main>
    <Navbar/>
    <Header/>
    <About/>
    <Skills/>
    <Portfolio/>
    <Contact/>
    <Footer/>
   </main>
  )
}

export default App