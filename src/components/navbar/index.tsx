import { Link } from "react-router-dom";
import { NavbarDiv } from "./style";

export function Navbar() {
  return (
    <>
      <NavbarDiv>
        <Link to="/">
          <h2 className={location.pathname === "/" ? "active" : "disabled"}>
            Historia
          </h2>
        </Link>
        <Link to="/pastorais">
          <h2 className={location.pathname === "/pastorais" ? "active" : "disabled"}>
            Pastorais
          </h2>
        </Link>
      </NavbarDiv>
    </>
  );
}
