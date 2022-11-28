import React from 'react'
import './Navbar.css';
import {Typewriter} from 'react-simple-typewriter'
import {Link} from 'react-scroll'
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
  <a className="navbar-brand ms-2" href="#">
  <Typewriter
  
  cursor
  cursorStyle="_"
  typeSpeed={140}

  delaySpeed={1000}
  words={['ESTELESA ITALIA']}
  />
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto ms-auto ">
      <li className="nav-item">
        <Link to="home" className='nav-link home-link text-dark' spy={true} smooth={true} offset={-40} duration={300}>Home</Link>
      </li>
      <li className="nav-item">
      <Link to="mirrors" className='nav-link mirrors-link text-dark' spy={true} smooth={true} offset={0} duration={300}>Mirrors</Link>
      </li>
      <li className="nav-item">
      <Link to="recentProjects" className='nav-link contact-link text-dark' spy={true} smooth={true} offset={-50} duration={300}>Projects</Link>
      </li>
      <li className="nav-item">
      <Link to="ambience" className='nav-link  ambience-link text-dark' spy={true} smooth={true} offset={0} duration={300}>Ambience</Link>
      </li>
      <li className="nav-item">
      <Link to="steps" className='nav-link steps-link text-dark' spy={true} smooth={true} offset={0} duration={300}>Steps</Link>
      </li>
      <li className="nav-item">
      <Link to="email" className='nav-link email-link text-dark' spy={true} smooth={true} offset={10} duration={300}>Email</Link>
      </li>
      <li className="nav-item">
      <Link to="contact" className='nav-link contact-link text-dark' spy={true} smooth={true} offset={-100} duration={300}>Contact</Link>
      </li>
    </ul>

  </div>
</nav>
  )
}
