import "./App.css";
import React from "react";
import Contact from "./component/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Service from "./component/Service";
import Header from "./NavBar/Header";
import FooterInfo from "./NavBar/FooterInfo";
import Footer from "./NavBar/Footer";
import About from "./component/About";
import Cart from "./component/Cart";
import Menu from "./component/Menu";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shop" element={<Menu />} />
          </Routes>
        </div>
        <FooterInfo />
        <Footer />
      </Router>
    </>
  );
}

export default App;
