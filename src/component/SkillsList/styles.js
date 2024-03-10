import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  transition: 500ms;
  padding: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
    justify-items: center;
  }
`

export const Title = styled.div`
  padding-bottom: 1rem;
  font-size: 40px;
  font-weight: 100;
  line-height: 1.8;
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

export const Text = styled.span`
  color: white;
  font-weight: 200;
  line-height: 1.7;
  opacity: 0.6;

  @media (max-width: 600px) {
    font-size: 17px;
  }
`;

export const TextContainer = styled.div`
  flex: 1;
  max-width: 700px;
`

export const SkillsListContainer = styled.div`
  flex: 1;
  max-width: 700px;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  gap: 2rem;

  @media (max-width: 600px) {
    justify-content: center;
  }
`

export const StyledCard = styled.div`
  text-align: center;
  height: 1.8rem;
  width: 1.8rem;
  font-size: 1.8rem;
  border-radius: 50%;
  padding: 12px;
  transition: 0.5s;
  
  &:hover {
    transform: scale(1.3);
    background-color: ${props => props.colorprop};
    div svg {
      fill: ${props => props.colorproptext};
    }
  }
`