import { FaWhatsapp } from "react-icons/fa";
import { BottonWhatsapp } from "../bottonWhatsapp";
import { Div, Fotte } from "./style";

export function Footer() {
  return (
    <div style={{ position: "relative" }}>
      <Div>
        <Fotte>
          <h2>Paroquia Nossa Senhora das Graças</h2>
          <BottonWhatsapp>
            <FaWhatsapp />
          </BottonWhatsapp>
          <p style={{ fontSize: 10 }}>© Copyright 2024 </p>
        </Fotte>
      </Div>
    </div>
  );
}
