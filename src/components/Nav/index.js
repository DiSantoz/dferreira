import React, { useState } from "react";

function Nav(props) {
  const [categories] = useState([
    {
      name: "Frontend Projects",
    },
    { name: "Backend Projects" },
    { name: "Full-Stack Projects" },
  ]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          David Ferreira
        </a>
      </h2>

      <nav className="container">
        <ul className="row">
          <li className="col-md">
            <a href="#about">About me</a>
          </li>

          {categories.map((category) => (
            <li className="col-md" key={category.name}>
              <span>{category.name}</span>
            </li>
          ))}
          <li className="col-md">
            <span>Contact</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
