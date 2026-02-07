import React from 'react'
import  { Suspense, lazy } from "react";

// import Hero from './components/Hero';
// import Projects from './components/Projects'
const Header=lazy(() => import("./components/Header"));
const Hero = lazy(() => import("./components/Hero"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const SkillsAbout = lazy(() => import("./components/SkillAbout"));
// import Contact from './components/Contact';
import './App.css'
// import SkillsAbout from './components/SkillAbout';
import SectionLoader from "./components/SectionLoader";
const App = () => {
  return (
    // <Suspense></Suspense>
    // <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
    //   <Header />
    //   <Hero />
    //   <Projects />
    //   <SkillsAbout/>
    //   <Contact />
    //   <footer className="mt-12 text-center text-sm text-gray-500 py-6">© {new Date().getFullYear()} Siddhartha Paudel — Built with React, Vite & Tailwind</footer>
    // </div>
    <Suspense fallback={<SectionLoader />}>
      <Header/>
  <Hero />
  <Projects />
  <SkillsAbout />
  <Contact />
</Suspense>
  )
}

export default App