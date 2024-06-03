import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

import { FaWhatsapp } from "react-icons/fa";

import {
  DivHistoriaParoquia,
  Historia,
  ImgParoquia1,
  ImgParoquia2,
  Padre,
  PadreDiacono,
} from "./style";

import imgParoquial from "../../assets/frenteDeitada.jpeg";
import imgParoquial2 from "../../assets/frenteMaisBunita.jpeg";
import { BottonWhatsapp } from "../../components/bottonWhatsapp";

export function Home() {
  return (
    <>
      <BottonWhatsapp>
        <FaWhatsapp />
      </BottonWhatsapp>
      <Header />
      <DivHistoriaParoquia>
        <Historia>
        <h1>História Paróquial</h1>
        <ImgParoquia1 src={imgParoquial} alt="Image da frente da Paroquia" />
        <ImgParoquia2 src={imgParoquial2} alt="Image da frente da Paroquia" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi et ut
          in vitae vero esse repellat aliquam veniam nisi suscipit tempora
          accusamus, velit ex incidunt illo facere nam harum! Ullam? Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Enim sunt, quae
          exercitationem doloribus laudantium ratione earum quidem atque
          molestiae ducimus. Harum odit quod aliquid ipsam voluptatem quis
          provident, perspiciatis consequatur?Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Consequuntur magni debitis minus eveniet
          porro exercitationem quae deleniti dolore, numquam ipsa amet, fugiat
          optio animi. Architecto nesciunt eum nobis nisi ipsa? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Nisi omnis hic sapiente
          exercitationem dicta. Minima expedita, quos laboriosam sunt velit,
          eligendi saepe ipsum quo voluptates facilis perferendis illum totam.
          Animi.
        </p>
        </Historia>
        <hr />
        <PadreDiacono>
          <h1>Pároco e Diácono</h1>
          <Padre>
            <ImgParoquia2
              src={imgParoquial2}
              alt="Image da frente da Paroquia"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi et
              ut in vitae vero esse repellat aliquam veniam nisi suscipit
              tempora accusamus, velit ex incidunt illo facere nam harum! Ullam?
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
              sunt, quae exercitationem doloribus laudantium ratione earum
              quidem atque molestiae ducimus. Harum odit quod aliquid ipsam
              voluptatem quis provident, perspiciatis consequatur?Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Consequuntur magni
              debitis minus eveniet porro exercitationem quae deleniti dolore,
              numquam ipsa amet, fugiat optio animi. Architecto nesciunt eum
              nobis nisi ipsa? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nisi omnis hic sapiente exercitationem dicta.
              Minima expedita, quos laboriosam sunt velit, eligendi saepe ipsum
              quo voluptates facilis perferendis illum totam. Animi.
            </p>
          </Padre>
        </PadreDiacono>
        <Footer />
      </DivHistoriaParoquia>
    </>
  );
}
