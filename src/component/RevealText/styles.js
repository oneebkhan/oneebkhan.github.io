import { motion } from "framer-motion";
import styled from "styled-components";

export const MainContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const Container = styled(motion.div)`
  position: -webkit-sticky;
  position: sticky;
  top: calc(60vh - 19vw);
  color: white;
  white-space: nowrap;
  overflow: hidden;
  font-size: 19vw;

  @media (max-width: 600px) {
    font-size: 100px;
  }
`;
