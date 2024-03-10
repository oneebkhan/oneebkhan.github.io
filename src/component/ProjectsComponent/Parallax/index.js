import React from "react";
import { useScroll, useTransform, useSpring } from "framer-motion";
import ProjectHeader from "../ProjectHeader";
import ProjectCard from "../ProjectCard";
import {
  AnimatedContainer,
  ParallaxConatiner,
  ParallaxFirstContainer,
  ParallaxSecondContainer,
  ParallaxThirdContainer,
} from "../styles";

const Parallax = ({ projects }) => {
  const firstRow = projects.slice(0, 5);
  const secondRow = projects.slice(5, 10);
  const thirdRow = projects.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <ParallaxConatiner ref={ref}>
      <ProjectHeader />
      <AnimatedContainer
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <ParallaxFirstContainer>
          {firstRow.map((project) => (
            <ProjectCard
              project={project}
              translate={translateX}
              key={project.title}
            />
          ))}
        </ParallaxFirstContainer>
        <ParallaxSecondContainer>
          {secondRow.map((project) => (
            <ProjectCard
              project={project}
              translate={translateXReverse}
              key={project.title}
            />
          ))}
        </ParallaxSecondContainer>
        <ParallaxThirdContainer>
          {thirdRow.map((project) => (
            <ProjectCard
              project={project}
              translate={translateX}
              key={project.title}
            />
          ))}
        </ParallaxThirdContainer>
      </AnimatedContainer>
    </ParallaxConatiner>
  );
};

export default Parallax;
