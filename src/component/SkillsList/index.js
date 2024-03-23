import React from "react";
import {
  Container,
  Title,
  Text,
  TextContainer,
  MainContainer,
  Background,
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
import Tags from "../Tags";

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

const SkillsList = () => {
  return (
    <MainContainer>
      <Background
        viewport={{ once: true }}
        initial={{ opacity: 0, translateY: -30 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.4 }}
      >
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, translateY: -30 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            style={{}}
          >
            <Title>About Me</Title>
          </motion.div>
          <Container>
            <TextContainer>
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, translateY: -30 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <Text>
                  <p>
                    I am a full stack software engineer with over{" "}
                    {calculateYears()}+ years of experince developing digital
                    solutions for diverse problems.
                  </p>
                  <p>
                    I have experience with full-stack web development using
                    technologies like GraphQL, NodeJS, ExpressJS, React,
                    MongoDB, SailsJS, SQL, PostgreSQL, NestJS, Django, Python,
                    Javascript and Typescript.
                  </p>
                </Text>
              </motion.div>
            </TextContainer>
            <Tags tags={LIST_OF_SKILLS}/>
          </Container>
        </Background>
    </MainContainer>
  );
};

export default SkillsList;
