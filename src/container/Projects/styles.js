import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  padding: 10rem 0rem;
`

export const Title = styled(motion.div)`
  text-align: center;
  font-size: 40px;
  font-weight: 100;
  line-height: 1.3;
  opacity: 0.9;
  letter-spacing: 5px;
  text-decoration: underline;
  text-underline-offset: 1rem;
  text-decoration-thickness: from-font;

  @media (max-width: 600px) {
    font-size: 35px;
    letter-spacing: 5px;
  }
`;
