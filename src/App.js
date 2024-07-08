import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import "./App.scss";
import Home from "./pages/home/Home";
import Aos from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Contact from "./pages/contac/Contact";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";
const App = () => {
  const [theme, setTheme] = useState("dark");
  const handleTogle = () => {
    if (theme == "dark") setTheme("light");
    if (theme == "light") setTheme("dark");
  };
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className={theme}>
      <main>
        <BrowserRouter>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Contact />} path="/contact" />
            <Route element={<About />} path="/about" />
            <Route element={<Portfolio />} path="/portfolio" />
          </Routes>
          <Footer />
        </BrowserRouter>
      </main>
    </div>
  );
};

export default App;
