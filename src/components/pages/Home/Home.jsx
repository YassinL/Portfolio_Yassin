import React from "react";
import { HashLink } from "react-router-hash-link";
import "./Home.scss";
import MooveImage from "../../organisms/MooveImage/MooveImage";
import DownArrow from "../../atoms/SVG/DownArrow";

export default function Home() {
  return (
    <div className="home">
      <div className="home_image">
        <MooveImage />
      </div>
      <div className="home_title">
        <h1>YASSIN LECLERCQ</h1>
      </div>
      <div className="home_presentation">
        <p>
          Bonjour, je suis un développeur créatif j'ai crée ce site afin de
          paratger les différents projets que j'ai pu réaliser
        </p>
      </div>
      <div className="home_projects">
        <HashLink to="/projets">
          <div className="home_projects_title">
            <p>Projets</p>
          </div>

          <div className="home_projects_svg">
            <DownArrow />
          </div>
        </HashLink>
      </div>
    </div>
  );
}
