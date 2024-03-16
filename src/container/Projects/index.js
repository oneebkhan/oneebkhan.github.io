import React from "react";
import { Container } from "./styles";
import ProjectsComponent from "../../component/ProjectsComponent";
import fyp2 from "../../assets/images/fyp2.png";
import fyp3 from "../../assets/images/fyp3.png";
import flavorwiki3 from "../../assets/images/flavorwiki3.png";
import flavorwiki5 from "../../assets/images/flavorwiki5.png";
import portfolio from "../../assets/images/portfolio.png";
import logo from "../../assets/images/logo.png";

const PROJECTS = [
  {
    title: "Flavorwiki",
    link: "https://tester.flavorwiki.com",
    thumbnails: [flavorwiki3, flavorwiki5],
    description: `My day job, I usually am in charge fo feature development and bug fixes, but have also designed a re-designed subset of the main application. 
      The project in question is a platform that provides the most agile and innovative digital platform for consumer understanding, product testing and market research in the industry, worldwide. 
      Powered by A.I and machine learning, FlavorWiki helps companies stay competitive and build winning innovations using real consumers, testing real products, in real life - As stated on their bio`,
  },
  {
    title: "Medicine Authenticator (FYP)",
    link: "https://github.com/oneebkhan/FYP_Medicine-Authenticator/releases/tag/v1.0",
    thumbnails: [fyp2, fyp3],
    description: "My final year project, developed in flutter",
  },
  {
    title: "Portfolio",
    link: "https://github.com/oneebkhan/portfolio-react-v2",
    thumbnails: [portfolio],
    description: "Work together in re",
  },
  {
    title: "Random Projects",
    link: "https://github.com/oneebkhan",
    thumbnails: [logo],
    description: "Work together in re",
  },
];

const Projects = () => {
  return (
    <Container>
      <ProjectsComponent content={PROJECTS} />
    </Container>
  );
};

export default Projects;
