import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import AcercaDeMi from "@/components/AcercaDe";
import MisProyectos from "@/components/Proyectos";
import MiEducacion from "@/components/Educacion";
import MisSkills from "@/components/Skills";
import "../style/acerca.css";
import "../style/proyectos.css";
import "../style/educacion.css";
import "../style/skills.css";
import "../style/contacto.css";
import "../style/footer.css";
import Link from "next/link";
import PiePagina from "@/components/Footer";

export default function Navbar (){

  
    return (
        <div className="fondo">
            <div>
                <nav className="navbar bg-primary ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                    <h3 className="titulo-p">CEVI.DEV</h3>
                    </a>
                </div>
                </nav>
            </div>
            <div>
                <AcercaDeMi/>
            </div>
            <div>
                <MisProyectos/>
            </div>
            <div>
                <MisSkills/>
            </div>
            <div >
                <MiEducacion/>
            </div>
            <div>
                <PiePagina/>
            </div>
        </div>
    )
}