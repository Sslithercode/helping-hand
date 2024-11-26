import Image from "next/image";


import React from 'react';
import { Navbar } from '../components/Navbar.jsx';
import { Hero } from '../components/Hero.jsx';
import { Programs } from '../components/Programs.jsx';
import { LocalImpact } from '../components/LocalImpact.jsx';

function App() {
  return (
    <div className="min-h-screen bg-orange-50">
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <LocalImpact />
      </main>
    </div>
  );
}


export default App;