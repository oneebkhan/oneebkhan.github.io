import styled from "styled-components";

export const SkillsListContainer = styled.div`
  flex: 1;
  max-width: 700px;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  gap: 2rem;
  padding-bottom: 3rem;
  z-index: 4;

  @media (max-width: 600px) {
    justify-content: center;
    gap: 1rem;
  }
`;

export const StyledCard = styled.div`
  text-align: center;
  height: 1.8rem;
  width: 1.8rem;
  font-size: 1.8rem;
  border-radius: 50%;
  padding: 12px;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    transform: scale(1.3);
    background-color: ${(props) => props.colorprop};
    div svg {
      fill: ${(props) => props.colorproptext};
    }
  }
`;
