import { Link } from 'react-router-dom'
import '../components/about.css'
import logo from '../assets/MachadoCicala_logo.png'
import foto1 from '../assets/machado-cicala-blanco-negro.jpg'
import foto2 from '../assets/gabriel-machado.jpg'
import foto3 from '../assets/jose-cicala.jpg'
import instagramLogo from '../assets/icons/icon-instagram.png'

function About({path}) {

    return (
        
            <div className='about'>

                {path==null &&
                    <>
                        <section>
                            <div>
                                <img className='logo' src={logo} alt="logo" />
                            </div>

                            
                            <div className='perfil'>
                                <img src={foto1} alt="foto" />
                                <div className='grey-instagram'>
                                    <Link to={"https://www.instagram.com/machadocicala/?hl=es"} target='_blank'><img rel='icon' src={instagramLogo} alt="instagram" /><strong>@machadocicala</strong></Link>
                                </div>
                                <div className='links'>
                                    <Link to={"/about/1"} className='link1'>
                                        <img src={foto2} alt="foto" />
                                        <div>
                                            <p>Bio</p>
                                            <p><strong>Gabriel Machado</strong></p>
                                        </div>
                                    </Link>

                                    <Link to={"/about/2"} className='link2'>
                                        <img src={foto3} alt="foto" />
                                        <div>
                                            <p>Bio</p>
                                            <p><strong>José Cicala</strong></p>
                                        </div>
                                    </Link>
                                </div>
                            </div>


                        </section>

                        <section>
                            <div className='info'>
                                <p><strong>Machado Cicala</strong> es el estudio audiovisual y fotográfico que cautiva miradas de marcas nacionales e internacionales. Gabriel Machado y José Cicala crean universos que se consolidan a través de la lente, firmando un pacto invisible con su talento. Ambos tienen estilos diversos entre sí, pero los une una irrefutable pasión: la imagen.</p>
                                <p>Con más de veinte años de trayectoria, el team supo especializarse en los focos que representan a cada uno de ellos para lograr transmitir su visión de la estética y del arte. A la hora de trabajar, se transforman en dos transmisores de energía.</p>
                                <p><strong>Gabriel Machado</strong>, el “preferido” de las celebrities, disfruta creando climas para conquistar a las figuras a través de sus flashes. El rubro del entretenimiento es su fuerte, cree en la belleza escondida de las personas y a través de la lente logra captar momentos únicos donde el potencial de cada persona queda expuesto sin oponer resistencia. Su terapia son el teatro y la televisión.</p>
                                <p>Por otro lado, <strong>José Cicala</strong> se destaca por el entusiasmo en su rol de Director de arte. Encuentra en el rubro audiovisual y en las mega producciones fotográficas un camino para crear historias, épocas y personajes. Su dedicación en la preproducción y la obsesión por los detalles siempre culminan en un producto perfecto. Su mente está permanentemente predispuesta para echarse a volar.</p>
                                <p>Machado Cicala es, entonces, un centro de pasión innegociable, donde predominan el amor por el trabajo, la buena energía y la imaginación sin límites. Con dos conceptos distintos, pero no opuestos, se complementan para crear productos de alta calidad rindiéndole culto a su talento.</p>
                            </div>

                        </section>
                    </>
                }
                
                {path==1 &&
                    <>
                        <section>
                            <h2>GABRIEL MACHADO</h2>
                            <div className='perfil'>
                                <img src={foto2} alt="foto" />
                                <div className='grey-instagram'>
                                    <Link to={"https://www.instagram.com/machadito_arte/?hl=es"} target='_blank'><img rel='icon' src={instagramLogo} alt="instagram" /><strong>@machadito_arte</strong></Link>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className='info'>
                                <p><strong>Gabriel Machado </strong>nació el 20 de agosto de 1966 en La Tablada, localidad de la Provincia de Buenos Aires. Es licenciado en publicidad, estudió en la Universidad de Lomas de Zamora. Durante la cursada, conoció a su compañero ideal y con quien comparte la pasión por la fotografía, José Cicala.</p>

                                <p>En 1993, crearon su propio estudio y con el tiempo, la experiencia de ambos junto con su popularidad abrió camino dentro del mundo artístico. Así fue como dos años después, se integró Fabián Morassut y juntos fundaron MACHADO CICALA MORASSUT.</p> 
                                
                                <p>Teatral, enérgico y optimista, Gabriel irradia luz no sólo por los flashes sino a través de su carisma. Esa personalidad encantadora y su disfrute, lo transmite en cada uno de los trabajos y es por eso que resulta ser el elegido por las celebrities. Cree en la belleza natural que esconde cada persona y logra descubrir esas nuevas facetas que quedan materializadas en imágenes.</p>

                                <p>Es tan fuerte su vínculo con el arte que pasa gran tiempo de sus días como espectador en salas de teatro. Le emociona el talento y aplaude con admiración a los personajes que a través del humor, drama o acciones, cuentan historias.</p>

                                <p>Fiel a sus convicciones, confidente y leal, tres cualidades que caracterizan a este fotógrafo que pronuncia como frase de cabecera “Que suerte que a mí, me tocó ser yo”. Ese pensamiento refleja su gratitud y demuestra ser un espíritu joven que aún hoy, continúa sorprendiéndose.</p>
                            </div>
                        </section>
                    </>
                }

                {path==2 &&
                    <>
                        <section>
                            <h2>JOSÉ CICALA</h2>
                            <div className='perfil'>
                                <img src={foto3} alt="foto" />
                                <div className='grey-instagram'>
                                    <Link to={"https://www.instagram.com/josecicala/?hl=es"} target='_blank'><img rel='icon' src={instagramLogo} alt="instagram" /><strong>@josecicala</strong></Link>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className='info'>
                                <p><strong>José María Cicala</strong> nació el 15 de agosto de 1965 en Lanús, ciudad de la Provincia de Buenos Aires.  Es licenciado en publicidad, estudió en la Universidad de Lomas de Zamora. Durante la cursada, conoció a Gabriel Machado, su aliado perfecto y con quien comparte la pasión por la fotografía.</p>

                                <p>En 1993, decidieron crear su propio estudio y con el tiempo, comenzaron a instaurar su sello dentro del mundo artístico. Dos años después, se integró Fabián Morassut y juntos fundaron MACHADO CICALA MORASSUT.</p>

                                <p>Cinematográfico, teatral y pictórico, José Cicala fusiona la fotografía y la dirección de arte en piezas dignas de observar en detalle. El rubro publicitario, las mega-producciones, tanto fotográficas como audiovisuales, y los proyectos especiales resultan ser los medios indicados para generar contenidos que inspiran.</p> 
                                
                                <p>Su creatividad combinada con la minuciosa dedicación que le presta a todos los procesos pre y post producción, componen imágenes que narran historias y crean personajes.</p>

                                <p>Coleccionista de épocas y devoto de objetos retro, José busca que el espectador deba mirar más de una vez para encontrarle múltiples sentidos a la foto.</p> 
                                
                                <p>Ese empuje perfeccionista y su cualidad de “niño” fluyen en conjunto hacia ideas sumamente originales que aseguran la fidelidad del equipo con que trabaja.</p>
                            </div>

                        </section>
                    </>
                }

            </div>
    )
}

export default About