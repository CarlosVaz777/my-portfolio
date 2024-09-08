import Image from "next/image";
import "../app/page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import "../style/skills.css";


export default function MisSkills () {
    return(
        <div className="my-skills">
            <div> 
                <h2 className="texto-sk">Skills</h2>
            </div>
            <div className="card4-container">
                
                <div className="card4">
                    <div>
                        <h5>Lenguajes de Programación</h5>
                        <div >
                            <Image className="image" src="/img/php.png" width={90} height={50} alt="Php" />
                            <Image className="image" src="/img/php.png" width={90} height={50} alt="Php"/>
                            <Image className="image" src="/img/c.png" width={90} height={50} alt="C#"/>
                            <Image className="image" src="/img/js.png" width={90} height={50} alt="JavaScript"/>
                        </div>
                    </div>
                </div>

                <div className="card4">
                    <div className="container">
                        <div>
                            <h5>Bases de Datos Relacionales </h5>
                            <div className="html-icon">
                                <Image className="image" src="/img/sql.png" width={90} height={50} alt="SQL Server"/>
                                <Image className="image" src="/img/mysql.png" width={80} height={50} alt="MYSQL"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card4">
                    <div className="container">
                        <div>
                            <h5>Bases de Datos No Realacionales</h5>
                            <div className="html-icon">
                                <Image className="chip-sk" src="/img/mdb.png" width={90} height={50} alt="Mongo DB"/>
                                <Image className="chip-sk" src="/img/fr.png" width={90} height={50} alt="Firebase"/>
                            </div>
                        </div>
                    </div>
                </div>

                

                <div className="card4">
                    <div className="container">
                        <div>
                            <h5>Frameworks</h5>
                            <div className="html-icon">
                                <Image className="chip-sk" src="/img/rn.png" width={90} height={50} alt="React Native"/>
                                <Image className="chip-sk" src="/img/nt.png" width={90} height={50} alt="Next JS"/>
                                <Image className="chip-sk" src="/img/ci.png" width={90} height={50} alt="CodeIgniter"/>
                                <Image className="chip-sk" src="/img/as.jpg" width={90} height={50} alt="ASP.NET"/>
                                <Image className="chip-sk" src="/img/a.png" width={90} height={50} alt="Angular JS"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card4">
                    <div className="container">
                        <div>
                            <h5>Front End</h5>
                            <div className="html-icon">
                                < Image className="chip-sk" src="/img/html.png" width={90} height={50} alt="Html"/>
                                <Image className="chip-sk" src="/img/css.png" width={90} height={50} alt="Css"/>
                                <Image className="chip-sk" src="/img/js.png" width={90} height={50} alt="JavaScript"/>
                                <Image className="chip-sk" src="/img/jq.png" width={90} height={50} alt="JQuery"/>
                                <Image className="chip-sk" src="/img/bp.png" width={90} height={50} alt="Boostrap"/>
                                <Image className="chip-sk" src="/img/fg.png" width={90} height={50} alt="Figma"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card4">
                    <div className="container">
                        <div>
                            <h5>Back End</h5>
                            <div className="html-icon">
                                <Image className="chip-sk" src="/img/dj.png" width={90} height={50} alt="Node JS"/>
                                <Image className="chip-sk" src="/img/es.png" width={0} height={50} alt="Express"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card4">
                    <div className="container">
                        <div>
                            <h5>Otras Herramientas</h5>
                            <div className="html-icon">
                                <Image className="chip-sk" src="/img/jira.png" width={90} height={50} alt="Jira"/>
                                <Image className="chip-sk" src="/img/pm.png" width={90} height={50} alt="Postman"/>
                                <Image className="chip-sk" src="/img/aws.png" width={90} height={50} alt="AWS"/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div> 
    )
}