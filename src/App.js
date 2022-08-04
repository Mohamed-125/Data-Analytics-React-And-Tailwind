import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import "./App.css";
import Analytics from "./components/Analytics";
import Newsletter from "./components/Newsletter";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Analytics />
      <Newsletter />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
