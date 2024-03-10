import React from "react";
import {
  ProjectHeaderContainer,
  ProjectHeaderTitle,
  ProjectHeaderDescription,
} from "../styles";

const ProjectHeader = () => {
  return (
    <ProjectHeaderContainer>
      <ProjectHeaderTitle>
        Projects <br /> I've worked on
      </ProjectHeaderTitle>
      <ProjectHeaderDescription>
        These are some of the projects that I have worked on. Some during work
        and some during my free time. Feel free to view view and star them
      </ProjectHeaderDescription>
    </ProjectHeaderContainer>
  );
};

export default ProjectHeader;
