import React from "react";
import Resumepdf from "../../assets/resume/Resume.pdf";

function Resume() {
  return (
    <section className="">
      <h1 id="about" style={{ textAlign: "right" }}>
        Download my{" "}
        <a
          href={Resumepdf}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="resume"
        >
          Resume
        </a>
      </h1>

      <div className="container">
        <h2 style={{ textAlign: "center" }} className="prof">
          List of Proficiencies
        </h2>
        <h3 style={{ textAlign: "center" }} className="title">
          Languages
        </h3>
        <ul style={{ textAlign: "center" }} className="lists">
          <li className=" list-inline-item">
            <img
              src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
              alt="HTML5"
            />
          </li>
          <li className=" list-inline-item">
            <img
              src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white"
              alt="CSS"
            />
          </li>
          <li className=" list-inline-item">
            <img
              src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
              alt="JavaScript"
            />
          </li>
          <li className=" list-inline-item">
            <img
              src="https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white"
              alt="JSON"
            />
          </li>
        </ul>

        <h3 style={{ textAlign: "center" }} className="title">
          Databases
        </h3>
        <ul style={{ textAlign: "center" }} className="lists">
          <li className=" list-inline-item">
            <img
              src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white"
              alt="MYSQL"
            />
          </li>
          <li className=" list-inline-item">
            <img
              src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"
              alt="MONGODB"
            />
          </li>
        </ul>

        <h3 style={{ textAlign: "center" }} className="title">
          Tools
        </h3>
        <ul style={{ textAlign: "center" }} className="lists">
          <li className=" list-inline-item">
            <img
              src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"
              alt="NPM"
            />
          </li>
          <li className=" list-inline-item">
            <img
              src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"
              alt="NODEJS"
            />
          </li>
          <li className=" list-inline-item">
            <img
              src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"
              alt="Express"
            />
          </li>
          <li className=" list-inline-item">
            <img
              src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"
              alt="Bootstrap"
            />
          </li>
          <li className=" list-inline-item">
            <img
              src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white"
              alt="Git"
            />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
