import { motion } from "framer-motion";
import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  height: 450px;
  width: 450px;
  max-width: 80vw;
  max-height: 80vw;
  overflow: hidden;
  background-color: #2b2d32;
`;

export const InnerCardContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  transition-property: transform;
  transition-duration: 300ms;
  background-size: cover;
  background-position: center;

  &:hover {
    transform: scale(1.1);
  }
`;

export const StyledSection = styled.section`
  position: relative;
  height: 300vh;
`;

export const InnerStyledDiv = styled.section`
  position: sticky;
  top: 0px;
  height: 100vh;

  @media (max-width: 800px) {
  }
`;

export const InnerStyledSection = styled.section`
  position: sticky;
  top: 0;
  display: flex;
  height: 100vh;
  align-items: center;
  overflow: hidden;
`;

export const AnimatedDiv = styled(motion.div)`
  display: flex;
  gap: 1rem;
`;

export const TextContainer = styled.div`
  max-width: calc(100vw - 6rem);
  padding: 5vh 2rem;

  @media (max-width: 800px) {
    padding: 3vh 2rem;
  }
`;

export const Text = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  opacity: 0.8;
  font-weight: normal;
  color: #cbd5e0;
  line-height: 1.5;
  word-break: break-word;
  white-space: normal;

  @media (max-width: 1000px) {
    font-size: 1rem;
    line-height: 1.2;
  }
  
  @media (max-width: 600px) {
    font-size: 0.8rem;
    line-height: 1.2;
  }
`;

export const Title = styled.div`
  font-size: 3.7rem;
  font-weight: bold;
  opacity: 0.8;
  text-shadow: 0 2px 4px rgba(71, 97, 206, 0.36);

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const StyledList = styled.ul`
  padding-inline-start: 1rem;
`;

// export const PictureTitleContainer = styled.div`
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   z-index: 10;
//   display: grid;
//   place-content: center;
//   opacity: 0;
//   transition: 0.7s;

//   &:hover {
//     opacity: 1;
//   }
// `;

// export const PictureTitle = styled.p`
//   background: linear-gradient(
//     to bottom right,
//     rgba(255, 255, 255, 0.2),
//     rgba(255, 255, 255, 0)
//   );
//   padding: 2rem;
//   font-size: 4rem;
//   font-weight: 900;
//   text-transform: uppercase;
//   color: #fff;
//   backdrop-filter: blur(8px);
// `;
