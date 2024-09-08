import Image from "next/image";
import "../app/page.module.css";
import Contactame from "./Contacto";
import "../style/acerca.css";


export default function AcercaDeMi() {
  return (
    <section>
      <article className="acerca1 ">

        <div className="card-container-ac">

          <div className="card2-ac">
          <Image
              className="image-y"
              src="/img/yo.jpg"
              width={250}
              height={200}
              priority={true}
              layout="cover"
              alt="SQL Server"
            />
          </div>

          <div className="texto-c">
            <Contactame />
          </div>
          
        </div>
        
      </article>

      <article className="principal">
        <div className="acerca">
          <h2 className="texto-ac">Sobre mi</h2>
          <p className="parrafo">
            Egresado en el área de Desarrollo y Gestión de Software en busca de
            experiencia, <br />
            soy bueno adaptándome a lo que se me presente, con diferentes
            Frameworks o herramientas <br /> de desarrollo de software, consumos
            de API, creación de apps Móvil, Web, Consola.
          </p>
        </div>
      </article>
    </section>
  );
}
