import React from "react";

function Nav() {
  const categories = [
    {
      name: "Frontend Projects",
    },
    { name: "Backend Projects" },
    { name: "Full-Stack Projects" },
  ];

  function categorySelected(name) {
    console.log(`${name} clicked`);
  }

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
            <a href="#about" onClick={() => categorySelected()}>
              About me
            </a>
          </li>

          {categories.map((category) => (
            <li className="col-md" key={category.name}>
              <span onClick={() => categorySelected(category.name)}>
                {category.name}
              </span>
            </li>
          ))}
          <li className="col-md">
            <span onClick={() => categorySelected()}>Contact</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
