import '../styles/App.css';
import '../styles/Navbar.css';
import React, { forwardRef } from "react";
import { Link } from "react-router-dom";

const Navbar = forwardRef((props, ref) => {
   return (
      <header>
         <nav className="navbar" ref={ref}>
            <Link to="/" className="nav-logo">Philip</Link>
            <ul className="nav-links">
               <li><Link to="/about">About</Link></li>
               <li><Link to="/projects">Projects</Link></li>
               <li><a href="https://github.com/philipchurchley" target="_blank" rel="noreferrer">GitHub</a></li>
               <li><a href="https://www.linkedin.com/in/philip-churchley/" target="_blank" rel="noreferrer">LinkedIn</a></li>
            </ul>
         </nav>
      </header>
   );
});

export default Navbar;
