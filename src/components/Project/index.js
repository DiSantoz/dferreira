import React, { useState } from "react";
import Data from "../../data.json";
const allStyles = {};
function Project() {
  // Using useState, declare a new state variable 'friendsList' and set it to the 'friends' array from 'friends.json'
  const [projectList] = useState(Data);

  return (
    //   <div class="card" style="width: 18rem;">
    //   <img src="IMAGE" class="card-img-top" alt="...">
    //   <div class="card-body">
    //     <h5 class="card-title">{project.title}</h5>
    //     <p class="card-text">{project.description}</p>

    //   </div>
    // </div>

    <div className="users">
      {projectList.map((project, index) => (
        <div className="card" style={{ width: "18rem" }} key={index}>
          <h3>{project.category}</h3>
          <p className="card-title">{project.title}</p>
          <p className="card-text">{project.description}</p>
          <img src={project.image} className="card-img-top" alt="..."></img>

          <a href={project.deployed} className="btn btn-primary"></a>
          <a href={project.github} className="btn btn-primary"></a>
        </div>
      ))}
    </div>
  );
}

export default Project;
