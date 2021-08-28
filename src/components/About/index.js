import React from "react";
import coverImage from "../../assets/cover/me.jpg";

function About() {
  return (
    <section className="">
      <h1 className="text-center" id="about">
        David Ferreira
      </h1>

      <img
        src={coverImage}
        className="rounded mx-auto d-block"
        style={{ width: "350px", height: "400px" }}
        alt="cover"
      />

      <div className="">
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
