import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg header-gradient p-2 fixed-top">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand text-white">FlyStudyThrive</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link active text-white" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
            <Link to="/about" className="nav-link text-white">About Us</Link>
        </li>
        <li className="nav-item">
        <Link to="/contact" className="nav-link text-white">Contact Us</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

  );
}

export default Navbar
