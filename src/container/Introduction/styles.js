import styled from "styled-components";

export const IntroductionContainer = styled.div`
  height: 100vh;
  background: ${(props) => `url(${props.image})`} center center no-repeat;
  background-size: cover;
  filter: brightness(30%);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
  animation: opacityOffset 1500ms;

  @keyframes opacityOffset {
    0% { filter: brightness(0%); background-position: top;  }
    100% { filter: brightness(30%); background-position: center; }
  }
`;

export const Container = styled.div`
  height: 100vh;
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  justify-items: stretch;
  flex-direction: column;
  height: 90%;
  padding: 12px;
`;