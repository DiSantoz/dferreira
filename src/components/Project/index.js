import React, { useState } from "react";
import Data from "../../data.json";

function Project() {
  // Using useState, declare a new state variable 'friendsList' and set it to the 'friends' array from 'friends.json'
  const [projectList] = useState(Data);

  return (
    <div className="users">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {projectList.map((project, index) => (
          <div className="col">
            <div className="card" style={{ width: "30rem" }} key={index}>
              <h3>{project.title}</h3>
              <img src={project.image} className="card-img-top" alt="..."></img>
              <p className="card-title">{project.category}</p>
              <p className="card-text">{project.description}</p>
              <a href={project.deployed} className="btn btn-outline-primary">
                <i class="fad fa-browser fa-2x"></i>
              </a>
              <a href={project.github} className="btn btn-outline-primary">
                <i class="fab fa-github-square fa-2x"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
