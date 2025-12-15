import React from 'react'
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects'
import Contact from './components/Contact';
import './App.css'
import SkillsAbout from './components/SkillAbout';
const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      <Header />
      <Hero />
      <Projects />
      <SkillsAbout/>
      <Contact />
      <footer className="mt-12 text-center text-sm text-gray-500 py-6">© {new Date().getFullYear()} Siddhartha Paudel — Built with React, Vite & Tailwind</footer>
    </div>
  )
}

export default App