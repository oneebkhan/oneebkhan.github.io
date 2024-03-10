import styled from "styled-components";

export const Container = styled.div`
  margin-left: 20px;
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  padding-left: 20px;
  padding-bottom: 10px;
  animation: fadeIn 700ms;

  @keyframes fadeIn {
    0% { opacity: 0; transform: translateY(-100px); }
    100% { opacity: 1; transform: translateY(0px); }
  }

  @media (max-width: 600px) {
    margin-bottom: 50px;
  }
`;

export const Title = styled.div`
  font-size: 60px;
  font-weight: 100;
  letter-spacing: 5px;
  opacity: 0.8;
  padding-bottom: 5px;

  @media (max-width: 600px) {
    font-size: 40px;
    font-weight: 100;
    letter-spacing: 5px;
  }

  @media (max-width: 400px) {
    font-size: 35px;
    letter-spacing: 5px;
  }
`;

export const Text = styled.span`
  color: white;
  margin-left: 5px;
  letter-spacing: 13px;
  font-weight: 100;
  opacity: 0.6;
  text-transform: uppercase;

  @media (max-width: 600px) {
    font-size: 17px;
    letter-spacing: 5px;
  }

  @media (max-width: 400px) {
    font-size: 12px;
    letter-spacing: 5px;
  }
`;
