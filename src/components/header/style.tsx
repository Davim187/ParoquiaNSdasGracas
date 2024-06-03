import styled from "styled-components";
export const Div = styled.div``;
export const Heade = styled.header`
  h1 {
    margin: 0 1rem;
    color: #fff;
    cursor: pointer;
    font-size: 1.5vw;
  }
  img {
    width: 100%;
    height: 200px;
  }
  @media (max-width:906px) {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
    width: 100%;
    height: 80px;
  }
  }
`;
