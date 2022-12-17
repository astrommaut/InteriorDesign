import React from "react";
import './Ambience.css'
import {Link} from 'react-scroll'
import AmbienceBg from './ambience1.jpeg'
export default function Ambience() {
  return (
    <div data-aos="fade-up" className="ambience" id="ambience">
      <div className="container pb-5 pt-5 text-center ">
        <div className="row rowBg">
          <div className="col-sm-12 col-xs-12 col-xl-4">
            <h4 className="mirror-name ">All about ambience</h4>
            <p className="ambience-text">
              Longer, brighter days may be on the way, but the right lighting is
              still key for a feel-good space. And when it comes to ambient
              glows, we’ve got the answer – think sleek modern, elegant vintage,
              beautifully bizarre and more.
            </p>
            <Link to="email" className='btn button text-dark' spy={true} smooth={true} offset={0} duration={300}>Contact Us</Link>
          </div>
          <div className="col-sm-12 col-xs-12 col-xl-8">
            <img src={AmbienceBg} className="ambience-bg img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
