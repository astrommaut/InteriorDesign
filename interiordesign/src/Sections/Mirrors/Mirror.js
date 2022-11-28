import React from "react";
import "./Mirror.css";
import MirrorBg from './Mirror.webp'

import {Link} from 'react-scroll'
function Slider() {
  return (
    <div className="mirror" id="mirrors">
    <div className="container pb-5 pt-5 text-center ">
      <div className="row rowBg ">
        <div className="col-sm-12 col-xs-12 col-xl-4 ">
          <h4 className="mirror-name ">Mirror, mirror</h4>
          <p className="mirror-text">
            An interior designer's secret weapon? Mirrors. And it's no surprise
            — they instantly brighten up a space and make it feel bigger, too.
            So, if you're ready to elevate your home, start with our collection
            of the latest mirrors to know.
          </p>
          <Link to="email" className='btn button text-dark' spy={true} smooth={true} offset={0} duration={300}>Contact Us</Link>

        </div>
        <div className="col-sm-12 col-xs-12 col-xl-8">
          <img src={MirrorBg} className='img-fluid' alt=""/>

        </div>
      </div>
    </div>
    </div>
  );
}

export default Slider;
