import React from 'react'
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects'
import About from './components/About';
import Contact from './components/Contact';
import './App.css'
const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <footer className="mt-12 text-center text-sm text-gray-500 py-6">© {new Date().getFullYear()} Siddhartha Paudel — Built with React, Vite & Tailwind</footer>
    </div>
  )
}

export default App