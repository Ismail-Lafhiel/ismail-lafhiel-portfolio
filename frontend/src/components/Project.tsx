import React from "react";
import mock01 from "../assets/images/mock01.png";
import mock02 from "../assets/images/mock02.png";
import mock03 from "../assets/images/mock03.png";
import mock04 from "../assets/images/mock04.png";
import mock05 from "../assets/images/mock05.png";
import mock06 from "../assets/images/mock06.png";
import mock07 from "../assets/images/mock07.png";
import mock08 from "../assets/images/mock08.png";
import mock09 from "../assets/images/mock09.png";
import mock10 from "../assets/images/mock10.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a
            href="https://github.com/AlloMedia-Team/AlloMedia-Dashboard"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock10} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/AlloMedia-Team/AlloMedia-Dashboard"
            target="_blank"
            rel="noreferrer"
          >
            <h2>AlloMedia Delivery</h2>
          </a>
          <p>
            Food delivery app with dynamic search and authentication system,
            developed using React and TailwindCss for the frontend, Nodejs, and
            Expressjs and MongoDB for the backend.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/Ismail-Lafhiel/Hint"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock09} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/Ismail-Lafhiel/Hint"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Hint</h2>
          </a>
          <p>
            A blog website originaly made for MernOps, where users can share and
            discuss there best ideas and subjects. with JavaScript (Ejs
            template) and TailwindCss for the frontend and Nodejs, Expressjs and
            MySQL for the backend.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/Ismail-Lafhiel/tic-tac-toe-20x20-"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock08} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/Ismail-Lafhiel/tic-tac-toe-20x20-"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Tic tac toe 20x20</h2>
          </a>
          <p>
            JavaScript-based Tic Tac Toe game played on a 20x20 grid. The
            objective is for a player to get five of their marks in a row,
            either horizontally, vertically, or diagonally. The game includes
            features like move tracking, undo functionality, and a scoreboard.
          </p>
        </div>
        <div className="project">
          <a href="https://cbcom.ma/" target="_blank" rel="noreferrer">
            <img src={mock07} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="https://cbcom.ma/" target="_blank" rel="noreferrer">
            <h2>Cbcom maroc</h2>
          </a>
          <p>
            This is a freelance project based on PHP Laravel framework for the
            backend, Blade engine and TailwindCss for the frontend, MySQL for
            the database.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/Ismail-Lafhiel/Projet-fill-rouge"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock06} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/Ismail-Lafhiel/Projet-fill-rouge"
            target="_blank"
            rel="noreferrer"
          >
            <h2>EliteStay</h2>
          </a>
          <p>
            First year graduation project at Youcode. EliteStay is a hotel
            booking app developed using PHP Laravel framework for the backend,
            Blade engine and TailwindCss for the frontend, MySQL for the
            database.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/Ismail-Lafhiel/Taskify"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock05} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/Ismail-Lafhiel/Taskify"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Taskify</h2>
          </a>
          <p>
            Taskify is a REST api designed to be a gateway for developing a task
            management web app based on Laravel and MySQL.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/Ismail-Lafhiel/Evento"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock04} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/Ismail-Lafhiel/Evento"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Evento</h2>
          </a>
          <p>
            Evento is a platform, designed to simplify and elevate event
            planning. Technologies used are Blade template and Tailwind for the
            frontend, PHP Laravel for the backend, MySQL for the database.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/Ismail-Lafhiel/CHRIH"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock03} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/Ismail-Lafhiel/CHRIH"
            target="_blank"
            rel="noreferrer"
          >
            <h2>CHRIH e-commerce</h2>
          </a>
          <p>
            CHRIH is an e-commerce store designed using Laravel, Blade engine,
            Tailwind and MySQL.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/Ismail-Lafhiel/StadiumStream"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock02} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/Ismail-Lafhiel/StadiumStream"
            target="_blank"
            rel="noreferrer"
          >
            <h2>StadiumStream</h2>
          </a>
          <p>
            SteadiumStream is a PHP application designed to provide a seamless
            platform for purchasing tickets for Afcon 2023. This user-friendly
            application provides fans with a convenient and secure way to access
            and purchase tickets for the highly anticipated event . With
            SteadiumStream, users can browse available tickets, select their
            preferred seat and complete their purchase with ease. The app is
            designed with a focus on efficiency and reliability, ensuring a
            smooth and enjoyable ticket purchasing experience for all users.
          </p>
        </div>
        <div className="project">
          <a
            href="https://people-per-task.vercel.app/src/index.html"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock01} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://people-per-task.vercel.app/src/index.html"
            target="_blank"
            rel="noreferrer"
          >
            <h2>PeoplePerTasks</h2>
          </a>
          <p>
            PeoplePerTask is a dynamic freelance platform designed to connect
            talented individuals with businesses and individuals in need of
            their services. With a user-friendly interface and a wide range of
            categories, PeoplePerTask provides a seamless experience for both
            freelancers and clients. Developed using HTML5, TailwindCss and
            JavaScript.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
