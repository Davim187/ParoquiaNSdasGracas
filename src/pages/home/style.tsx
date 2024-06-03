import styled from "styled-components";

export const DivHistoriaParoquia = styled.div`
  height: 100vh;
  text-align: center;

  h1 {
    font-size: 2.5vw;
    padding-top: 2%;
    font-family: kanit;
    margin-bottom: 7%;
  }
  hr {
    width: 80%;
    margin:0 10%;
  }
  @media (max-width: 1000px) {
    h1 {
      font-size: 4vw;
    }
  }
`;

export const ImgParoquia1 = styled.img`
  width: 40%;
  margin: 2% 1% 0 0;
  @media (max-width: 1000px) {
    width: 60%;
    margin: 2% 1% 0 0;
  }
`;

export const ImgParoquia2 = styled.img`
  width: 20%;
  margin: 0;

  @media (max-width: 1000px) {
    width: 30%;
    margin: 0;
  }
`;
export const Historia = styled.div`
  p {
    text-align: start;
    margin: 2% 7%;
    font-size: 15px;
  }
  @media (max-width: 1000px) {
    p {
      font-size: 10px;
    }
  }
`;
export const PadreDiacono = styled.div`
  position: relative;
`;
export const Padre = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 320px;
  @media (max-width: 1000px) {
    width: 60%;
    margin: 2% 1% 0 0;
  }
  p {
    margin: 0;
  }
  margin: 0 8%;
  img {
    width: 100%;
    margin-right: 2%;
    font-size: 1.5vw;
  }
`;
