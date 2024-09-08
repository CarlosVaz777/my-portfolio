import Image from "next/image";
import "../style/proyectos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhp } from "@fortawesome/free-brands-svg-icons";
import { faFire, faFireFlameCurved } from "@fortawesome/free-solid-svg-icons";

export default function MisProyectos (){
return(
    <div>
        <div className="ti-tulo-p">
            <h2 className="texto-pt">Mis proyectos</h2>
        </div>
        <div className="card-container">

            <div className="card2">
            <Image className="img-proyecto" src={'/img/principal.jpeg'} width={500} height={500} priority={true} alt="SQL Server" />
                <div className='container'>
                    <h5>Parque Vehicular</h5>
                    <p>Forme parte del proyecto (Parque Vehicular), <br />este proyecto se realizo con las siguientes herramientas:</p>
                </div>
                <div>
                    <ul className="chip-list">
                        <li className="chip-php "><FontAwesomeIcon icon={faPhp} className="chip-img" />php </li>
                        <li className="chip-codeigniter"><FontAwesomeIcon icon={faFireFlameCurved} className="chip-img" />CodeIgniter v3</li>
                        <li className="chip-slq"> <Image className="chip-img" src="/img/sql-s.png" width={90} height={50} alt="SQL Server"/>SQL Server</li>
                        <li className="chip-boostrap"><Image className="chip-img" src="/img/bp.png" width={90} height={50} alt="Boostrap"/>Boostrap v4</li>
                    </ul>
                </div>
            </div>

            <div className="card2">
                <Image className="img-proyecto-candy" src={'/img/candy.jpg'} width={550} height={550} alt="" />
                    <div>
                        <h5>Candy Store</h5>
                        <p>Fui líder del Proyecto (Candy Store)</p>
                    </div>
                <div>
                    <ul className="chip-list">
                        <li className="chip-html">< Image className="chip-img" src="/img/html.png" width={90} height={50} alt="Html"/>HTML5</li>
                        <li className="chip-css "><Image className="chip-img" src="/img/css.png" width={90} height={50} alt="Css"/>CSS3</li>
                        <li className="chip-slq"><Image className="chip-img" src="/img/rn.png" width={90} height={50} alt="React Native"/>React Native</li>
                        <li className="chip-boostrap"><Image className="chip-img" src="/img/js.png" width={80} height={50} alt="JavaScript"/>JavaScript</li>
                        <li className="chip-boostrap"><Image className="chip-img" src="/img/ts.png" width={90} height={50} alt="Boostrap"/>TypeScript</li>
                        <li className="chip-boostrap"><Image className="chip-img" src="/img/fr.png" width={90} height={50} alt="Firebase"/>Firebase</li>
                    </ul>
                    <p className='p-ct'>
                        <a href="https://github.com/CarlosVaz777" target="_blank" rel="noopener noreferrer">
                        < Image src="/img/gt.png" width={40} height={40} alt="Html" className='icon-ct'/>
                    </a>
                </p>
                </div>
            </div>

            <div className="card2">
                <Image className="img-proyecto" src={'/img/rn.png'} width={150} height={150} alt="" />
                    <div>
                        <h5>Operación Diaria</h5>
                        <p>Forme parte del proyecto (Operdia)</p>
                    </div>
                    <div>
                    <ul className="chip-list">
                        <li className="chip-html">< Image className="chip-img" src="/img/html.png" width={90} height={50} alt="Html"/>HTML5</li>
                        <li className="chip-css "><Image className="chip-img" src="/img/css.png" width={90} height={50} alt="Css"/>CSS3</li>
                        <li className="chip-slq"><Image className="chip-img" src="/img/c.png" width={90} height={50} alt="React Native"/>C#</li>
                        <li className="chip-boostrap"><Image className="chip-img" src="/img/as.jpg" width={80} height={50} alt="JavaScript"/>ASP .Net</li>
                        <li className="chip-boostrap"> <Image className="chip-img" src="/img/sql-s.png" width={90} height={50} alt="SQL Server"/>SQL Server</li>
                    </ul>
                </div>
            </div>

            <div className="card2">
                <Image className="img-proyecto" src={'/img/rn.png'} width={150} height={150} alt="" />
                    <div>
                        <h5>Casa Domotica</h5>
                        <p>Fui lider del proyecto (Casa Domotica)</p>
                    </div>
                <div>
                    <ul className="chip-list">
                        <li className="chip-html">< Image className="chip-img" src="/img/ar.png" width={90} height={50} alt="Html"/>Arduino</li>
                        <li className="chip-css "><Image className="chip-img" src="/img/pt.png" width={90} height={50} alt="Css"/>Python</li>
                        <li className="chip-slq"><Image className="chip-img" src="/img/ad.png" width={90} height={50} alt="React Native"/>Android Studio</li>
                        <li className="chip-boostrap"><Image className="chip-img" src="/img/a.png" width={80} height={50} alt="JavaScript"/>Angular</li>
                        <li className="chip-boostrap"> <Image className="chip-img" src="/img/pma.png" width={90} height={50} alt="SQL Server"/> PhpMyAdmin</li>
                    </ul>
                </div>
            </div>

            <div className="card2">
            <Image className="img-proyecto" src={'/img/rn.png'} width={150} height={150} alt="" />
                <div>
                    <h5>Venta de Motos y Accesorios</h5>
                    <p>Fui líder del proyecto (Venta de Motos y Accesorios)</p>
                </div>
                <div>
                    <ul className="chip-list">
                        <li className="chip-html">< Image className="chip-img" src="/img/html.png" width={90} height={50} alt="Html"/>HTML5</li>
                        <li className="chip-css "><Image className="chip-img" src="/img/css.png" width={90} height={50} alt="Css"/>CSS3</li>
                        <li className="chip-boostrap"><Image className="chip-img" src="/img/js.png" width={80} height={50} alt="JavaScript"/>JavaScript</li>
                    </ul>
                </div>
            </div>

        </div>

    </div>
)
}