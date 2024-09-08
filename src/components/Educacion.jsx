import "../app/page.module.css";
import "../style/educacion.css";

export default function MiEducacion () {
    return(
        <div >
            <div>
                <h3 className="texto-ed">Mi EDUCACIÓN</h3>
            </div>
            <div>
            <div className="card3-container">
                <div className="card3">
                    <div className="container">
                        <div className="card-wiht">
                            <h5 className="">Universidad Tecnologica de Izúcar de Matamoros</h5>
                            <h6>ING. Desarrollo y Gestión de Software</h6>
                        </div>
                    </div>
                </div>

                <div className="card3">
                    <div className="container">
                        <div className="">
                            <h5 className="">Universidad Tecnologica de Izúcar de Matamoros</h5>
                            <h6>TSU. Area en Desarrollo de Software Multiplataforma</h6>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}