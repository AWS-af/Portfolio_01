import React from "react";
import "./App.scss";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import AboutMe from "./Components/AboutMe";
import svg from './assets/layered-steps.svg'

function App() {
  return (
    <>
      <main className="main">
        <NavBar />
        <Hero />
        <Projects />
        <AboutMe />
      </main>
    </>
  );
}

export default App;
