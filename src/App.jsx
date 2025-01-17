import React from 'react'
import Nav from './components/Navbar/Nav'
import Home from './components/Home/Home'
import About from './components/about/About'
import Project from './components/project/Project'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div>
      <Nav/>
      <Home/>
      <About/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default App
