import { Div, Heade } from "./style";

import logoParoquia from "../../assets/LOGO(PASCOM)3.png";
import { Navbar } from "../navbar";

export function Header() {
  return (
  <div style={{position:'relative'}}>
      <Div>
        <Heade>
          <img src={logoParoquia} alt="logoParoquia" />
          <h1>Paroquia Nossa Senhora das Graças</h1>
        </Heade>
        <Navbar />
      </Div>
    </div>
  );
}
