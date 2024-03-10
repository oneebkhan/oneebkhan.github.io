import React from "react";
import Seperator from "../../component/Seperator";
import { Container, Circles } from "./styles";
import SkillsList from "../../component/SkillsList";

const Skills = () => {
  return (
    <Container>
      <Seperator type="start" axis="vertical" />
      <SkillsList />
      <Seperator type="end" axis="vertical" />
      <Circles>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </Circles>
    </Container>
  );
};

export default Skills;
