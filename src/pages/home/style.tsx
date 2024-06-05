import styled from "styled-components";

export const DivHistoriaParoquia = styled.div`
  height: 100vh;
  text-align: center;

  h1 {
    font-size: 2.5vw;
    padding-top: 2%;
    font-family: kanit;
  }
  hr {
    width: 80%;
    margin: 0 10%;
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
  align-items: center;
  flex-direction: row;
  padding: 5%;
  /* height: 250px; */
  p {
    margin: 0;
    font-size: 1.1vw;
    width: 90%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 5%;
  }
  img {
    width: 250px;
    margin: 2% 1% 0 0;
    @media (max-width: 1000px) {
      min-width: 30%;
      margin: 2% 1% 0 0;
    }
  }

  @media (max-width: 850px) {
    flex-direction: column;
    p {
      font-size: 8px;
      order: 2;
    }
    img {
      order: 1;
      width: 40%;
      margin: 0;
    }
  }
`;

export const Diacono = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5%;
  align-items: center;
  order: 1;
  p {
    margin: 0;
    font-size: 1.1vw;
    width: 90%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 5%;
  }
  img {
    order: 2;
    width: 250px;
    margin: 2% 1% 0 0;
    @media (max-width: 1000px) {
      min-width: 20%;
      margin: 2% 1% 0 0;
    }
  }

  @media (max-width: 850px) {
    flex-direction: column;
    p {
      font-size: 8px;
      order: 2;
    }
    img {
      order: 1;
      width: 40%;
      margin: 0;
    }
  }
`;
