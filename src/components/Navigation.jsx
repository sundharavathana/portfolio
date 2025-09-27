import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import Education from "./journey";
import Skills from "./Skills";
import Projects from "./Projects";
import Certificates from "./Certificates";
import Contact from "./contact";
import "./css/nav.css";
import { useRef, useState } from "react";


function Navigation() {
  const [isExpanded, setIsExpanded] = useState(false);
  const collapseRef = useRef(null);

  const toggleNavbar = () => {
    const bsCollapse = window.bootstrap.Collapse.getOrCreateInstance(collapseRef.current);
    if (isExpanded) {
      bsCollapse.hide();
    } else {
      bsCollapse.show();
    }
    setIsExpanded(!isExpanded);
  };

  const closeNavbar = () => {
    const bsCollapse = window.bootstrap.Collapse.getOrCreateInstance(collapseRef.current);
    bsCollapse.hide();
    setIsExpanded(false);
  };

  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          {/* Brand */}
          <NavLink className="navbar-brand logo" to="/" onClick={closeNavbar}>
            Sundharavathana
          </NavLink>

          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarNav"
            aria-expanded={isExpanded}
            aria-label="Toggle navigation"
            onClick={toggleNavbar}
          >
            {isExpanded ? (
              <span className="exit-icon">&times;</span> // ✖ Exit button
            ) : (
              <span className="navbar-toggler-icon"></span> // Hamburger icon
            )}
          </button>

          {/* Collapsible Menu */}
          <div ref={collapseRef} className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" onClick={closeNavbar}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Education" onClick={closeNavbar}>
                  Education
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Skills" onClick={closeNavbar}>
                  Skills
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Projects" onClick={closeNavbar}>
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Certificates" onClick={closeNavbar}>
                  Certificates
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Contact" onClick={closeNavbar}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <div style={{ marginTop: "80px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Certificates" element={<Certificates />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Navigation;
