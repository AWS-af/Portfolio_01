import React from "react";
import "./App.scss";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import AboutMe from "./Components/AboutMe";
import bg from './assets/vecteezy_silhouette-landscape-with-fog-forest-pine-trees_9302805-1.jpg'
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <main className="main">
        <img src={bg} className="bg_img" />
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
