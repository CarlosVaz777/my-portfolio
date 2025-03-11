import Image from 'next/image';
import '../style/gobal.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function ContactoComponent () {
    return(
        <section className='my-contact'>
            <div >
                <h3 className='t-ct'>Carlos Enrique Vazquez Iglesias</h3>  
                <h4 className='t-ct'>Desarrollador Front-End</h4>
            </div>

            <div>
                <span className='chip-cv'> 
                    <a href="/cv/cv.pdf" download={'CV_Carlos-Enrique-Vazquez-Iglesias'} className='text-cv' aria-label='cv' > 
                        <FontAwesomeIcon icon={faCloudArrowUp} className="icon-up" /> 
                        Descargar CV
                    </a>
                </span>
            </div>

            <div>
                <span className='p-ct'>
                    <a href="" target="_blank" rel="noopener noreferrer" className='text-cv' aria-label='whatsapp'>
                    < Image src="/img/whatsapp.png" width={40} height={40} alt="Whats..." className='icon-up'/>
                    </a> 
                </span>
            </div>

            <div>
                <span className='p-ct'>
                    <a href="http://mail.google.com" target="_blank" rel="noopener noreferrer" aria-label='email'>
                    < Image src="/img/em.png" width={40} height={30} alt="Cargando..." className='icon-ct'/> 
                    </a> 
                    <span>carlos.enrique.3em@gmail.com</span>
                </span>
            </div>

            <div>
                <p className='p-ct'>
                    <a href="https://www.linkedin.com/in/carlos-enrique-vazquez-iglesias-3b9888257" target='_blank' aria-label='linkedin'>
                    < Image src="/img/in.png" width={40} height={40} alt="Linkedin.." className='icon-ct'/> 
                    </a>
                </p>
            </div>

            <div>
                <p className='p-ct'>
                    <a href="https://github.com/CarlosVaz777" target="_blank" rel="noopener noreferrer" aria-label='gitHub'>
                    < Image src="/img/gt.png" width={40} height={40} alt="Git..." className='icon-ct'/>
                    </a>
                </p>
            </div>
        </section>
    )
}