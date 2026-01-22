import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Menu from "./pages/Menu";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      const response = await fetch("/api/menu");
      const data = await response.json();
      setMenuItems(data.menu);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  return (
    <Router>
      <div className="app">
        <Navigation menuItems={menuItems} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
