import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "Reactjs",
  "Nextjs",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind",
];

const labelsSecond = [
  "PHP",
  "Laravel",
  "Nodejs",
  "Expressjs",
  "Nestjs",
  "MySQL",
  "MongoDb",
];

const labelsThird = ["Git", "GitHub Actions", "Docker", "AWS"];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Front end Development</h3>
            <p>
              I have built a diverse array of frontend web applications from scratch
              using modern technologies such as HTML, Css, Tailwind, JavaScript, Reactjs and Nextjs.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faNodeJs} size="3x" />
            <h3>Back end Development</h3>
            <p>
              I have built a diverse array of backend web applications
              using modern technologies such as PHP, Laravel, Nodejs, Expressjs, Nestjs
              and for the database I use MySQL and MongoDB.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>DevOps & Automation</h3>
            <p>
              Once the application is built, I set up DevOps testing, CI/CD
              pipelines, and deployment automation to support the successful
              Go-Live.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
