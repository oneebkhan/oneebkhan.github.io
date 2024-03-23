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
  opacity: 0.8;
  text-shadow: 0 2px 4px rgba(71, 97, 206, 0.36);

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const Text = styled.span`
  font-size: 1.1rem;
  font-weight: normal;
  color: #cbd5e0;
  opacity: 0.8;
  line-height: 1.5;
  word-break: break-word;
  white-space: normal;

  @media (max-width: 1000px) {
    font-size: 1rem;
    line-height: 1.5;
  }
  
  @media (max-width: 600px) {
    font-size: 0.8rem;
    line-height: 1.5;
  }
`;

export const TextContainer = styled.div`
  flex: 1;
  max-width: 700px;
`;