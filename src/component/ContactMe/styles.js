import { motion } from "framer-motion";
import styled from "styled-components";

export const BackgroundContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  mask-size: 40px;
  mask-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledSVG = styled.svg`
  z-index: 0;
  height: 100%;
  width: 100%;
  pointer-events: none;
  position: absolute;
`;

export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  border-radius: 0.375rem;
  background-color: #1a1c20;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export const StyledTextContainer = styled(motion.div)`
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;

  h1 {
    position: relative;
    z-index: 10;
    font-size: 5rem;
    text-align: center;
    font-family: sans-serif;
    font-weight: bold;

    @media (max-width: 600px) {
      font-size: 3rem;
    }
  }

  p {
    color: #a0aec0;
    max-width: 32rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    text-align: center;
    position: relative;
    z-index: 10;
    line-height: 1.5;

    @media (max-width: 700px) {
      font-size: 0.875rem;
    }
  }
`;

export const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 4;
  padding-top: 1rem;
`;

export const AnimatedButton = styled(motion.button)`
  cursor: pointer;
  z-index: 4;
  background-image: linear-gradient(
    to right,
    #29323c,
    #485563,
    #2b5876,
    #4e4376
  );
  box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);
  width: 200px;
  font-size: 0.875rem;
  color: #d3dbe7;

  font-weight: 600;
  height: 55px;
  text-align: center;
  border: none;
  background-size: 300% 100%;

  border-radius: 50px;
  moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-position: 100% 0;
    moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    color: white;
  }

  :focus {
    outline: none;
  }
`;
