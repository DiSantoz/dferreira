import React from "react";
import Resumepdf from "../../assets/resume/Resume.pdf";

function Resume() {
  return (
    <section className="my-5">
      <h1 id="about">
        Download my{" "}
        <a href={Resumepdf} target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </h1>

      <div className="container">
        <div className="row justify-content-start">
          {/* HTML ICON */}
          <div className="icon col">
            <i className="fab fa-html5 fa-3x" title="HTML"></i>
          </div>
          {/* CSS ICON */}
          <div className="icon col">
            <i className="fab fa-css3-alt fa-3x" title="CSS"></i>
          </div>
          {/* JAVASCRIPT ICON */}
          <div className="icon col">
            <i className="fab fa-js fa-3x" title="JavaScript"></i>
          </div>
          {/* NPM ICON */}
          <div className="icon col">
            <i className="fab fa-npm fa-3x" title="NPM"></i>
          </div>
          {/* NODEJS ICON */}
          <div className="icon col">
            <i className="fab fa-node fa-3x" title="NodeJs"></i>
          </div>
          {/* GIT ICON */}
          <div className="icon col">
            <i className="fab fa-git fa-3x" title="Git"></i>
          </div>
          {/* BOOTSTRAP ICON */}
          <div className="icon col">
            <i className="fab fa-bootstrap fa-3x fa-fw" title="Bootstrap"></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
