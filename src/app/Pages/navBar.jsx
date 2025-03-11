import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/gobal.css'
import AcercaComponent from "../Components/AcercaDe";
import ProyectosComponent from "../Components/Proyectos";
import MisSkillsComponent from "../Components/Skills";
import EducacionComponent from "../Components/Educacion";
import PiePaginaComponent from "../Components/Footer";

export default function NavBarPrincipal (){

  
    return (
        <div className="fondo">
            <div>
                <nav className="navbar bg-primary ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                    <h3 className="titulo-p">cevidev 🚀</h3>
                    </a>
                </div>
                </nav>
            </div>
            <div>
                <AcercaComponent/>
            </div>
            <div>
                <ProyectosComponent/>
            </div>
            <div>
                <MisSkillsComponent/>
            </div>
            <div >
                <EducacionComponent/>
            </div>
            <div>
                <PiePaginaComponent/>
            </div>
        </div>
    )
}