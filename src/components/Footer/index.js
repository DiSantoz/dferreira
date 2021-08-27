import React from "react";

function Footer() {
  return (
    <section class="container" id="contact">
      <h3>Contact Me</h3>
      <div>
        <address class="row g-2">
          <a href="tel:+19734326444" class="col">
            <i class="fas fa-mobile fa-2x"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/davidsantosferreira/ "
            class="col"
            target="_blank"
          >
            <i class="fab fa-linkedin fa-2x"> </i>
          </a>

          <a href="https://github.com/DiSantoz" target="_blank" class="col">
            <i class="fab fa-github-square fa-2x"> </i>
          </a>

          <a href="mailto:dferreia91@outlook.com" class="col">
            <i class="fas fa-envelope fa-2x"> </i>
          </a>
        </address>
      </div>
    </section>
  );
}

export default Footer;
