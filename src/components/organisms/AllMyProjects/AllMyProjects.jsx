import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import allMyProjects from "../../../data/AllProjects";
import "./AllMyProjects.scss";

export default function AllMyProjects() {
  return (
    <div className="allProjects">
      {allMyProjects.map((project, index) => {
        return (
          <HashLink
            to={`/projets/${project.url}/#`}
            className="allProjects_card"
            key={index}
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/${project.poster}`}
              alt={`Une illustration du projet ${project.name}`}
              className="allProjects_card_images"
            />
            <h2 className="allProjects_card_name">{project.name}</h2>
            <p className="allProjects_card_presentation">
              {project.presentation}
            </p>
          </HashLink>
        );
      })}
    </div>
  );
}
