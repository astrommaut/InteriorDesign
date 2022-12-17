import React, { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";
import aos from "aos";
import "aos/dist/aos.css";
import "./hero.css";
function Hero() {
  useEffect(() => {
    aos.init({ duration: 2000 });
  }, []);
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
          <p className="hero-p" data-aos="zoom-in">
            Quality materials, attention to detail and functional Italian design
          </p>
          <Link
            to="email"
            className="btn button1 text-white"
            spy={true}
            smooth={true}
            offset={0}
            duration={300}
            data-aos="zoom-in"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
