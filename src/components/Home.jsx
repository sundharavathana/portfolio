import React, { useEffect } from "react";
import "boxicons/css/boxicons.min.css";
import "aos/dist/aos.css";
import "./css/home.css";
import "../index.css"
import AOS from "aos";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  return (
    <section>
      {/* Main Row */}
      <div className="row Home justify-content-center align-items-center flex-wrap">
        {/* Text Section */}
        <div
          className="col-12 col-md-8 col-lg-8 col-xl-8  home-content order-2 order-md-1 "
          data-aos="fade-down"
        >
          <h1>
            Hi, I'm <span>Sundharavathana</span>
          </h1>
          <div className="text-animate">
            <h3>Front-end Developer</h3>
          </div>
          <p>
            Aspiring Web Developer with a strong foundation in web technologies including HTML, CSS, Bootstrap, JavaScript, and ReactJS. Basic experience in backend development using Python, Django, and MySQL. Quick learner with a passion for building responsive, user-friendly web applications. Hands-on experience through academic projects and personal development work. Eager to contribute to innovative development teams and grow in a dynamic tech environment.
          </p>

          <div className="btn-box d-flex  flex-column flex-md-row gap-5  flex-wrap justify-content-center justify-content-xxl-start ">
            <a
              href="/sundharavathanaresume.pdf"
              download="sundharavathana_Resume.pdf"
            >
              Resume
            </a>
            <Link to="/Contact">Contact Me</Link>
          </div>

          {/* Social Links aligned with text */}
          <div
            className="links d-flex flex-wrap gap-4 gap-sm-2 gap-md-3 mt-3 "
           
          >
            <a
              href="https://www.linkedin.com/in/sundharavathana0608"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-linkedin linkicon"></i>
            </a>
            <a
              href="https://www.github.com/sundharavathana"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-github linkicon"></i>
            </a>
            <a
              href="https://www.hackerrank.com/svsundhara2004"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-hackerrank linkicon"></i>
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div
          className="col-12 col-md-4 col-xl-4 profile  order-1 order-md-2 d-flex justify-content-center"
          data-aos="fade-up"
        >
          <div className="position-relative">
            <img
              src="/lalpark.jpeg"
              alt="Profile"
              className="pic"
            />
            <span className="circle-spin"></span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="row ">
        <footer className="bg-info footer text-center  fixed-bottom py-3">
          <div className="ftr d-flex justify-content-center align-items-center">
            <p className="text-muted copyrights mb-0">
              All copy rights are deserved and designed by SUNDHARAVATHANA
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default Home;
