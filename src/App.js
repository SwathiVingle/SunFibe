import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import WhyUs from "./components/WhyUs";
// import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        {/* <Products /> */}
        <WhyUs />
        {/* <Clients /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
