import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          CARE
        </a>
        <div
          class="collapse navbar-collapse text-center"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav mr-auto">
            <li class="nav-item  ">
              <a class="nav-link act" href="#">
                <Link to="/">HOME</Link>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                <Link to="/service">SERVICES</Link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <Link to="/contact">CONTACT US</Link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <Link to="/about">ABOUT</Link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <Link to="/shop">SHOP</Link>
              </a>
            </li>

            <a class="carta">
              <Link to="/cart">
                {" "}
                <AiOutlineShoppingCart />{" "}
              </Link>{" "}
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Header;
