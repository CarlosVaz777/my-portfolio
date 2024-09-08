import Image from 'next/image';
import '../app/page.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp, faEnvelope, faEnvelopeSquare, faPhone, faSquarePhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faSquareGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import "../style/contacto.css";
import Link from 'next/link';

export default function Contactame () {
    return(
        <section className='my-contact'>
            <div >
                <h3 className='t-ct'>Carlos Enrique Vazquez Iglesias</h3>  
                <h4 className='t-ct'>Desarrollador Front-End</h4>
            </div>

            <div>
                <span className='chip-cv'> 
                    <a href="/cv/cv.pdf" download={'CV_Carlos-Enrique-Vazquez-Iglesias'} className='text-cv'> 
                        <FontAwesomeIcon icon={faCloudArrowUp} className="icon-up" /> 
                        Descargar CV
                    </a>
                </span>
            </div>

            <div>
                <span className='p-ct'>
                    <a href="" target="_blank" rel="noopener noreferrer" className='text-cv'>
                    < Image src="/img/whatsapp.png" width={40} height={40} alt="Html" className='icon-up'/>
                    </a> 
                    243 434 47 62 
                </span>
            </div>

            <div>
                <span className='p-ct'>
                    <a href="http://mail.google.com" target="_blank" rel="noopener noreferrer">
                    < Image src="/img/em.png" width={40} height={30} alt="Html" className='icon-ct'/> 
                    </a> 
                    <span>carlos.enrique.3em@gmail.com</span>
                </span>
            </div>

            <div>
                <p className='p-ct'>
                    <a href="https://www.linkedin.com/in/carlos-enrique-vazquez-iglesias-3b9888257" target='_blank'>
                    < Image src="/img/in.png" width={40} height={40} alt="Html" className='icon-ct'/> 
                    </a>
                </p>
            </div>

            <div>
                <p className='p-ct'>
                    <a href="https://github.com/CarlosVaz777" target="_blank" rel="noopener noreferrer">
                    < Image src="/img/gt.png" width={40} height={40} alt="Html" className='icon-ct'/>
                    </a>
                </p>
            </div>
        </section>
    )
}