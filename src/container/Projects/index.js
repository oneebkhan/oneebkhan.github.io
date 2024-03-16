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
    description: `My final year project, developed in flutter. 
    Medicine Authenticator is an intuitive application built with Flutter and Firebase, ensuring seamless authentication and database handling. 
    It features a sleek interface with Lottie animations and Flaticons, operating at 144Hz. 
    The user side offers a medicine checker, pharmacy locator, alerts for COVID-19 updates, and an interactive interface. 
    Tracker_Admin provides administrative functionalities like managing medicine models, distributors, and pharmacists. 
    Users are invited to contribute to the project for further enhancements.`,
  },
  {
    title: "Portfolio",
    link: "https://github.com/oneebkhan/portfolio-react-v2",
    thumbnails: [portfolio],
    description: `The very site you are looking at. Special thanks to Aceternity UI for providing some of the animation templates used in this site`,
  },
  {
    title: "Random Projects",
    link: "https://github.com/oneebkhan",
    thumbnails: [logo],
    description: `My developer profile with the many projects I've made in my free time`,
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
