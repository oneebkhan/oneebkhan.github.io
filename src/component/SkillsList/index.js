import React from "react";
import {
  Container,
  Title,
  Text,
  TextContainer,
  SkillsListContainer,
  StyledCard,
} from "./styles";
import {
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiTypescript,
  SiJavascript,
  SiGraphql,
} from "react-icons/si";
import { FaReact, FaNode } from "react-icons/fa";
import { motion } from "framer-motion";

function calculateYears() {
  const startingDate = new Date("01/09/2021");
  const ageDifMs = Date.now() - startingDate;
  const ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970) - 1;
}

const LIST_OF_SKILLS = [
  {
    name: "React",
    icon: <FaReact />,
    colorprop: "#0358bf",
    colorproptext: "white",
  },
  {
    name: "Node.js",
    icon: <FaNode />,
    colorprop: "green",
    colorproptext: "white",
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    colorprop: "yellow",
    colorproptext: "black",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    colorprop: "green",
    colorproptext: "white",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    colorprop: "#0358bf",
    colorproptext: "white",
  },
  {
    name: "SQL",
    icon: <SiMysql />,
    colorprop: "#0358bf",
    colorproptext: "white",
  },
  {
    name: "Typescript",
    icon: <SiTypescript />,
    colorprop: "#0358bf",
    colorproptext: "white",
  },
  {
    name: "Javascript",
    icon: <SiJavascript />,
    colorprop: "yellow",
    colorproptext: "black",
  },
  {
    name: "GraphQL",
    icon: <SiGraphql />,
    colorprop: "purple",
    colorproptext: "white",
  },
];

const Card = ({ name, icon, colorprop, colorproptext, index }) => {
  return (
    <StyledCard colorprop={colorprop} colorproptext={colorproptext}>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, translateY: -100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5, delay: index / 15 + 0.5 }}
      >
        {icon}
      </motion.div>
    </StyledCard>
  );
};

const SkillsList = () => {
  return (
    <React.Fragment>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, translateY: -100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: "center", paddingTop: "2rem" }}
      >
        <Title>A Little Self-Introduction</Title>
      </motion.div>
      <Container>
        <TextContainer>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, translateY: -100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Text>
              I am a full stack software engineer with over {calculateYears()}+
              years of experince developing digital solutions for
              diverse problems.
              <br />
              <br />I have experience with full-stack web development using
              technologies like GraphQL, NodeJS, ExpressJS, React, MongoDB,
              SailsJS, SQL, PostgreSQL, NestJS, Django, Python, Javascript and
              Typescript.
            </Text>
          </motion.div>
        </TextContainer>
        <SkillsListContainer>
          {LIST_OF_SKILLS.map((skill, skillIndex) => {
            return (
              <Card
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
                colorprop={skill.colorprop}
                colorproptext={skill.colorproptext}
                index={skillIndex}
              />
            );
          })}
        </SkillsListContainer>
      </Container>
    </React.Fragment>
  );
};

export default SkillsList;
