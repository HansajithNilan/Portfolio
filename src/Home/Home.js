import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Typed from "typed.js";

import "./Home.css";

function Home() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "MERN-Stack Developer",
        "Frontend Developer",
        "Backend Developer",
        "UI/UX Designer",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="wrapper">
      <nav className="Navbar">
        <div className="portpolio">
          <a href="#">Portpolio</a>
        </div>
        <div className="items">
          <ul>
            <li>
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Skills</a>
              <a href="#">Project</a>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="Home">
        <div className="text">
          <h3>Hello, It's Me</h3>
          <h1>Nilan Hansajith</h1>

          <h3>
            I'm a <span ref={el} className="text2"></span>
          </h3>
          <p>
            I'm a web Designer with extensive experience for over 3 years.
            <br />
            expertise is to create and website design, Frontend design, and{" "}
            <br />
            many more...
          </p>
          <div className="medias">
            <div className="FaceBook">
              <FaSquareFacebook />
            </div>
            <div className="GitHub">
              <a href="https://github.com/HansajithNilan" target="_blank">
                <FaGithubSquare />
              </a>
            </div>
            <div className="Instergram">
              <FaInstagramSquare />
            </div>
            <div className="Likedn">
              <a
                href="https://www.linkedin.com/in/nilan-hansajith-358798301/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          <br />
          <button type="submit">More About Me</button>
        </div>

        <div className="image">
          <img src="./img.jpg"></img>
        </div>
      </div>
      <div className="aboutme" id="about-me">
        <div className="aboutmeimg">
          <img src="./img.jpg"></img>
        </div>
        <div className="aboutmetext">
          <h1>About Me</h1>
          <p>ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
