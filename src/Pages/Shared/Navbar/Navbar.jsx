import React from "react";
import logo from "../../../Assets/Img/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div class="navbar bg-black">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52 text-white font"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Service</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <a class="btn btn-ghost normal-case text-xl">
          <img className="h-6" src={logo} alt="" />
        </a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0 text-white font">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Service</a>
          </li>
          <li>
            <a>Portfolio</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div class="navbar-end">
        <a class="btn bg-black">Contact Now</a>
      </div>
    </div>
  );
};

export default Navbar;
