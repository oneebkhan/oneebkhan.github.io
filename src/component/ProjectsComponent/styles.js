import styled from "styled-components";
import { GoLinkExternal } from "react-icons/go";
import { motion } from "framer-motion";

export const Row = styled.div`
  margin-bottom: 5rem;
`;

export const RowTitle = styled(motion.div)`
  font-size: 3.7rem;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  width: max-content;
  transition: 0.3s;
  padding-bottom: 1.5rem;
  padding-right: 2rem;
  word-break: break-word;
  white-space: normal;
  max-width: 70vw;

  &:hover {
    color: #d59547;
    svg {
      fill: #d59547;
    }
  }

  @media (max-width: 1000px) {
    font-size: 2.5rem;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

export const RowDescription = styled(motion.div)`
  font-size: 1.2rem;
  font-weight: normal;
  color: #cbd5e0;
  padding-bottom: 2rem;
  padding-right: 1rem;
  line-height: 1.5;
  word-break: break-word;
  white-space: normal;

  @media (max-width: 1000px) {
    font-size: 1rem;
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

export const RowBottomDiv = styled(motion.div)`
  display: flex;
  padding-left: 1rem;
  gap: 1rem;
  overflow-x: hidden;
  width: calc(100% - 20%);
  word-break: break-word;
  white-space: normal;

  @media (max-width: 1000px) {
    flex-direction: column;
    overflow: hidden;
  }
`;

export const RowBottomDivCard = styled.div`
  width: 25rem;
  height: 15rem;
  border-radius: 0.375rem;
  background: linear-gradient(to top right, #4a5568, #2d3748);
  padding-top: 1rem;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 1000px) {
    width: 12rem;
    height: 10rem;
  }
`;

export const PathContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  width: calc(100% - 5rem);
`;

export const StyledSVG = styled.svg`
  flex-shrink: 0;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
`;

export const StyledGoLinkExternal = styled(GoLinkExternal)`
  font-size: 2rem;
  padding-left: 1rem;

  @media (max-width: 1000px) {
    font-size: 1.2rem;
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
    padding-left: 0.5rem;
  }
`;
