import Image from 'next/image';
import '../app/page.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp, faEnvelope, faEnvelopeSquare, faPhone, faSquarePhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faSquareGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import "../style/contacto.css";
import Link from 'next/link';

export default function PiePagina () {
    return(
        <section >
            <article className='footer-container'>
                <div className='titulo-footer'>
                    <h1 >Contacto</h1>
                </div>
            </article>

            <article className='footer-container' >
                <div>
                    <span className='chip-footer'> 
                        <a href="/cv/cv.pdf" download={'CV_Carlos-Enrique-Vazquez-Iglesias'} className='text-cv'> 
                            <FontAwesomeIcon icon={faCloudArrowUp} className="icon-footer" /> 
                        </a>
                    </span>
                </div>

                <div>
                    <span className='chip-footer'>
                        <a href="" target="_blank" rel="noopener noreferrer" className='text-cv'>
                        < Image src="/img/whatsapp.png" width={50} height={40} alt="Html" className='icon-footer'/>
                        </a> 
                    </span>
                </div>

                <div>
                    <span className='chip-footer'>
                        <a href="http://mail.google.com" target="_blank" rel="noopener noreferrer">
                        < Image src="/img/em.png" width={50} height={30} alt="Html" className='icon-footer'/> 
                        </a> 
                    </span>
                </div>

                <div>
                    <span className='chip-footer'>
                        <a href="https://www.linkedin.com/in/carlos-enrique-vazquez-iglesias-3b9888257" target='_blank'>
                        < Image src="/img/in.png" width={50} height={40} alt="Html" className='icon-footer'/> 
                        </a>
                    </span>
                </div>

                <div>
                    <span className='chip-footer'>
                        <a href="https://github.com/CarlosVaz777" target="_blank" rel="noopener noreferrer">
                        < Image src="/img/gt.png" width={50} height={40} alt="Html" className='icon-footer'/>
                        </a>
                    </span>
                </div>
            </article>
            
        </section>
    )
}