import { Div, Heade } from "./style";

// import logoParoquia from "../../assets/LOGO(PASCOM)3.png";
import logoParoquia from "../../assets/Nossa_Senhora_das.png";
import { Navbar } from "../navbar";

export function Header() {
  return (
    <div>
      <Div>
        <Heade>
          <img src={logoParoquia} alt="logoParoquia" />
        </Heade>
        <Navbar />
      </Div>
    </div>
  );
}
