import React, { Suspense, lazy, useRef, useMemo, memo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { LazyMotion, domAnimation } from "framer-motion";
import './App.css';

// Lazy Loaded Components
const Header = lazy(() => import("./components/Header"));
const Hero = lazy(() => import("./components/Hero"));
const Expertise = lazy(() => import("./components/Expertise"));
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const SectionLoader = lazy(() => import("./components/SectionLoader"));

// --- FIXED GLOBAL GALAXY (30,000 Positions for 10,000 Stars) ---
const GlobalGalaxy = memo(() => {
  const ref = useRef();
  
  // FIXED: Array size must be Stars * 3 (10k stars = 30k float values)
  const sphere = useMemo(() => {
    try {
      const data = random.inSphere(new Float32Array(30000), { radius: 1.5 });
      // Safety: Filter out any potential NaN values from the library
      for (let i = 0; i < data.length; i++) {
        if (isNaN(data[i])) data[i] = 0;
      }
      return data;
    } catch (e) {
      console.error("Galaxy Generation Failed:", e);
      return new Float32Array(30000).fill(0);
    }
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x -= delta / 50;
    ref.current.rotation.y -= delta / 60;
    
    // Smooth breathing/twinkle effect
    if (ref.current.children[0]) {
      ref.current.children[0].material.opacity = 0.18 + Math.sin(state.clock.elapsedTime) * 0.05;
    }
  });

  if (!sphere || sphere.length === 0) return null;

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#0f172a" 
          size={0.0035} 
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.25}
        />
      </Points>
    </group>
  );
});

const App = () => {
  return (
    <LazyMotion features={domAnimation}>
      <div className="relative min-h-screen bg-white selection:bg-slate-900 selection:text-white">
        
        {/* PERSISTENT BACKGROUND LAYER */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 1] }}>
            <Suspense fallback={null}>
              <GlobalGalaxy />
            </Suspense>
          </Canvas>
        </div>

        {/* MAIN CONTENT LAYER */}
        <main className="relative z-10 w-full">
          <Suspense fallback={<SectionLoader />}>
            <Header />
            
            {/* IMPORTANT: Ensure your Hero, Expertise, About, and Projects 
               components have 'bg-transparent' in their root className 
               so this global starfield is visible behind them.
            */}
            <Hero />
            <Expertise />
            <About />
            <Projects />
            <Contact />
            
            <footer className="py-20 text-center">
              <div className="max-w-7xl mx-auto px-6">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-100 to-transparent mb-12" />
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">
                  © {new Date().getFullYear()} Siddhartha Paudel
                </p>
                <p className="mt-4 text-[9px] font-bold text-slate-900 uppercase tracking-widest">
                  MERN • NEXT.JS • NODE.JS • FIREBASE
                </p>
              </div>
            </footer>
          </Suspense>
        </main>

      </div>
    </LazyMotion>
  );
};

export default App;