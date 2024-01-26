import React from "react";
import "./App.scss";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import AboutMe from "./Components/AboutMe";
import bg from './assets/vecteezy_distressed-overlay-texture-grunge-background-black-white_20116203.jpg'
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <main className="main">
        <NavBar />
        <Hero />
        <Projects />
        <AboutMe />
        <Footer />
      </main>
    </>
  );
}

export default App;
