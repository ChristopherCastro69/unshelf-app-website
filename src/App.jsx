import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Unshelf/Hero";
import Features from "./components/Features/Features";
import Overview from "./components/Overview/Overview";
import Footer from "./components/Footer/Footer";
import GoTopButton from "./components/Top/GoTopButton";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Overview />
      <Footer />
      <GoTopButton />
    </>
  );
}

export default App;
