import React from "react";
import Foooter from "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
function Footer() {
  return (
    <footer data-aos="fade-up" className="text-center text-white mt-4" id="contact">
      <div className="container pt-4 pb-4 mb-4 rowBg">
        <section className="mb-4">
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <FaFacebookF />
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <FaInstagram />
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <FaTwitter />
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <FaGoogle />
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <FaLinkedin />
          </a>
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <FaYoutube />
          </a>
        </section>
        <a className="text-dark copyright" href="">
         2020 Copyright: ESTELESAITALIA.com
        </a>
      </div>


    </footer>
  );
}

export default Footer;
