import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";

import "./hero.css";
function Hero() {
  return (
    <div className="container-fluid hero" id="home">
      <div className="row">
        <div className="col-xs-12 text-center text-white">
          <h1 className="estelesa">
            <Typewriter
              cursor
              cursorStyle="_"
              typeSpeed={130}
              delaySpeed={1000}
              words={["ESTELESA ITALIA"]}
            />
          </h1>
          <p className="hero-p">
            Quality materials, attention to detail and functional Italian design
          </p>
          <Link
            to="email"
            className="btn button1 text-white"
            spy={true}
            smooth={true}
            offset={0}
            duration={300}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
