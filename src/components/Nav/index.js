import React from "react";

function Nav(props) {
  const tabs = ["About Me", "Portfolio", "Contact", "Resume"];
  return (
    <header>
      <h2>
        <a href="/" className="name">
          <span>David Ferreira</span>
        </a>
      </h2>
      <ul className="nav nav-pills">
        {tabs.map((tab) => (
          <li className="nav-item" key={tab}>
            <a
              href={"#" + tab.toLowerCase()}
              // Whenever a tab is clicked on,
              // the current page is set through the handlePageChange props.
              onClick={() => props.handlePageChange(tab)}
              className={
                props.currentPage === tab ? "nav-link active" : "nav-link"
              }
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Nav;
