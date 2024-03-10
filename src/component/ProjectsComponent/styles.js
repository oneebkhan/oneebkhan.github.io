import { motion } from "framer-motion";
import styled from "styled-components";

export const ProjectHeaderContainer = styled.div`
  max-width: 80rem;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-top: 5rem;
  padding-bottom: 5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
  left: 0;
  top: 0;

  @media (min-width: 768px) {
    padding-top: 10rem;
    padding-bottom: 10rem;
  }
`;

export const ProjectHeaderTitle = styled.div`
  font-size: 45px;
  font-weight: 100;
  color: #fff;

  @media (max-width: 800px) {
    font-size: 35px;
  }
`;

export const ProjectHeaderDescription = styled.p`
  max-width: 28rem;
  font-weight: 200;
  line-height: 1.7;

  @media (max-width: 600px) {
    font-size: 17px;
  }
`;

export const ProjectCardContainer = styled(motion.div)`
  display: flex;
  flex-shrink: 0;
  height: 24rem;
  width: 30rem;
  position: relative;
`;

export const ProjectCardAction = styled.a`
  display: block;

  &:hover {
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  }
`;

export const ProjectCardImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: left top;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const ProjectCardDiv = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  background-color: #000;
  pointer-events: none;
  &:hover {
    opacity: 0.8;
  }
`;

export const ProjectCardTitle = styled.h2`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  opacity: 0;
  color: #fff;
  &:hover {
    opacity: 1;
  }
`;

export const ParallaxConatiner = styled.div`
  height: 300vh;
  padding-top: 10rem;
  padding-bottom: 10rem;
  overflow: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  display: flex;
  flex-direction: column;
  align-self: auto;
  perspective: 1000px;
  transform-style: preserve-3d;
`;

export const ParallaxFirstContainer = styled(motion.div)`
  display: flex;
  flex-direction: row-reverse;
  gap: 3rem;
  margin-bottom: 5rem;
`;

export const ParallaxSecondContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  margin-bottom: 5rem;
  gap: 3rem;
`;

export const ParallaxThirdContainer = styled(motion.div)`
  display: flex;
  flex-direction: row-reverse;
  gap: 3rem;
`;

export const AnimatedContainer = styled(motion.div)``
