import styled from "styled-components";

export const NavbarDiv = styled.div`
  background-color: #0099ff;
  border: 1px solid #0066ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: kanit;
  font-size: 70%;
  position: relative;
  bottom: 10px;
  h2 {
    margin: 8px 10px 10px 8px;
    color: #fff;
  }
  h2:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  .active {
    text-decoration: underline;
  }
  .disabled {
    text-decoration: dashed;
  }
  a {
    text-decoration: none;
  }
  @media (max-width: 1000px) {
    h2 {
      font-size: 100%;
    }
  }
`;
