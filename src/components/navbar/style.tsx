import styled from "styled-components";

export const NavbarDiv = styled.div`
  background-color: #369eff;
  border: 1px solid #0066ff;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;  

  h2{
    margin: 25px;
    color: #fff;
  }
  h2:hover{
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
    text-decoration: none; /* Remove o sublinhado dos links */
  }
` 
