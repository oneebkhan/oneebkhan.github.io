import { motion } from "framer-motion";
import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3rem;
`;

export const Background = styled(motion.div)`
  background: rgb(45 37 33 / 28%);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  padding: 2rem;
  max-width: 1200px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  transition: 500ms;

  @media (max-width: 600px) {
    flex-direction: column;
    justify-items: center;
  }
`;

export const Title = styled.div`
  padding-bottom: 1rem;
  text-align: start;

  font-size: 3.7rem;
  font-weight: bold;
  letter-spacing: 5px;
  opacity: 0.8;
  text-shadow: 0 2px 4px rgba(71, 97, 206, 0.36);

  @media (max-width: 600px) {
    font-size: 35px;
    letter-spacing: 5px;
  }
`;

export const Text = styled.span`
  color: white;
  font-weight: 200;
  line-height: 1.7;
  opacity: 0.6;
  letter-spacing: 1.2px;

  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

export const TextContainer = styled.div`
  flex: 1;
  max-width: 700px;
`;