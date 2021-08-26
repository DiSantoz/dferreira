import React from "react";
import coverImage from "../../assets/cover/me.jpg";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">David Ferreira</h1>
      <div class="container">
        <div class="row justify-content-start">
          {/* HTML ICON */}
          <div class="icon col">
            <i class="fab fa-html5 fa-3x" title="HTML"></i>
          </div>
          {/* CSS ICON */}
          <div class="icon col">
            <i class="fab fa-css3-alt fa-3x" title="CSS"></i>
          </div>
          {/* JAVASCRIPT ICON */}
          <div class="icon col">
            <i class="fab fa-js fa-3x" title="JavaScript"></i>
          </div>
          {/* NPM ICON */}
          <div class="icon col">
            <i class="fab fa-npm fa-3x" title="NPM"></i>
          </div>
          {/* NODEJS ICON */}
          <div class="icon col">
            <i class="fab fa-node fa-3x" title="NodeJs"></i>
          </div>
          {/* GIT ICON */}
          <div class="icon col">
            <i class="fab fa-git fa-3x" title="Git"></i>
          </div>
          {/* BOOTSTRAP ICON */}
          <div class="icon col">
            <i class="fab fa-bootstrap fa-3x fa-fw" title="Bootstrap"></i>
          </div>
        </div>
      </div>
      <img
        src={coverImage}
        className="rounded float-start"
        style={{ width: "350px", height: "400px" }}
        alt="cover"
      />

      <div className="float-md-start">
        <p>
          Full stack web developer with a certificate from Rutgers University
          Bootcamp. Motivated to build new and exciting applications alongside a
          team of individuals who share an equal passion for technology.
          Inspired by the innovations, the creativity, and the breakthroughs
          offered in the field. Loaded with an arsenal of skills from working in
          the law and accounting sectors. Equipped with the ability of
          accurately retaining information, effective time management , and a
          sharp attention to detail has enabled me to develop several projects
          and excel in HTML, CSS, JavaScript, JQuery and Bootstrap.
        </p>
        <p>
          From building a marketing website using HTML and CSS to building a
          task manager system using JQuery and Bootstrap, I showcase my ability
          to use a variety of programming languages/libraries and use them
          interchangeably. I’m excited to continue to learn, further develop my
          skill set, and display my creativity for all to see. Explore my work
          below and connect with me to gain a better understanding of my skill
          and what I can bring to your team and company! Absolutely love
          collaborating and creating new and innovative applications.
        </p>
      </div>
    </section>
  );
}

export default About;
