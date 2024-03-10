import React from "react";
import {
  ProjectCardAction,
  ProjectCardContainer,
  ProjectCardImage,
  ProjectCardDiv,
  ProjectCardTitle,
} from "../styles";

const ProjectCard = ({ project, translate }) => {
  return (
    <ProjectCardContainer
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={project.title}
    >
      <ProjectCardAction href={project.link}>
        <ProjectCardImage src={project.thumbnail} alt={project.title} />
      </ProjectCardAction>
      <ProjectCardDiv></ProjectCardDiv>
      <ProjectCardTitle>{project.title}</ProjectCardTitle>
    </ProjectCardContainer>
  );
};

export default ProjectCard;
