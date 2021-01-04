import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import allMyProjects from "../../../data/AllProjects";

export default function Projects() {
  return (
    <div className="allProjects">
      {allMyProjects.map((project, index) => {
        return (
          <div key={index}>
            <HashLink to={`/projets/${project.url}/#`}>
              <h2>{project.name}</h2>
            </HashLink>
          </div>
        );
      })}
    </div>
  );
}
