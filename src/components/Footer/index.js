import React from "react";

function Footer() {
  return (
    <footer class="footer" id="contact">
      <div class="">
        <h3>Contact Me</h3>

        <ul class="contact">
          <li>
            <a href="tel:+19734326444" class="">
              <i class="fas fa-mobile fa-2x"></i>
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/davidsantosferreira/ "
              class=""
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-linkedin fa-2x"> </i>
            </a>
          </li>

          <li>
            <a
              href="https://github.com/DiSantoz"
              target="_blank"
              rel="noreferrer"
              class=""
            >
              <i class="fab fa-github-square fa-2x"> </i>
            </a>
          </li>
          <li>
            <a href="mailto:dferreia91@outlook.com" class="">
              <i class="fas fa-envelope fa-2x"> </i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
