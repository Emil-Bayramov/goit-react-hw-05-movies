import styled from 'styled-components';

export const Title = styled.h1`
  margin-bottom: 25px;
  font-size: 28px;
  text-align: center;
  background: -webkit-linear-gradient(#66ffe5, #8093ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 768px) {
    font-size: 35px;
  }

  @media (min-width: 1280px) {
    font-size: 45px;
  }
`;
