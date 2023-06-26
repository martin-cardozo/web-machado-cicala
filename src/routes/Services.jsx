import { Link } from 'react-router-dom'
import '../components/services.css'
import Slider from "../components/Slider"

const images = Object.values(import.meta.glob('../assets/images/portfolio/entertaiment/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))


function Services() {


    return (

        <>
            <div className='services'>
                <section className='service-menu'>
                    <Link to={"/services/1"}>PRODUCCIONES FOTOGRÁFICAS</Link>
                    <Link to={"/services/2"}>PRODUCCIONES AUDIOVISUALES</Link>
                    <Link to={"/services/3"}>DESARROLLO DE CONCEPTOS CREATIVOS</Link>
                    <Link to={"/services/4"}>DIRECCIÓN DE ARTE</Link>
                    <Link to={"/services/5"}>VIDEO CLIPS</Link>
                    <Link to={"/services/6"}>MEGA PRODUCCIONES</Link>
                    <Link to={"/services/7"}>SPECIAL PROJECTS</Link>
                    <Link to={"/services/8"}>DISEÑO Y ARMADO DE ESCENOGRAFÍAS</Link>
                    <Link to={"/services/9"}>SCOUTING Y REALIZACIÓN DE PROPS</Link>
                    <Link to={"/services/10"}>RETOQUE ESTÉTICO</Link>
                    <Link to={"/services/11"}>MONTAJE</Link>
                    <Link to={"/services/12"}>EDICIÓN AUDIOVISUAL</Link>
                    <Link to={"/services/13"}>MAKE UP</Link>
                    <Link to={"/services/14"}>STYLING</Link>
                    <Link to={"/services/15"}>PRODUCCIÓN DE MODA</Link>
                </section>

                <section className='slider-menu'>
                    <Slider images={images}/>
                </section>
            </div>
        </>
    

        // <div>

        //     <Link to={"/services/1"}>Producciones fotográficas</Link>
        //     <Link to={"/services/2"}>Producciones audiovisuales</Link>
        //     <Link to={"/services/3"}>Desarrollo de conceptos creativos</Link>
        //     <Link to={"/services/4"}>Dirección de arte</Link>
        //     <Link to={"/services/5"}>Video Clips</Link>
        //     <Link to={"/services/6"}>Mega producciones</Link>
        //     <Link to={"/services/7"}>Special Projects</Link>
        //     <Link to={"/services/8"}>Diseño y armado de escenografías</Link>
        //     <Link to={"/services/9"}>Scouting y realización de props</Link>
        //     <Link to={"/services/10"}>Retoque estético y montaje</Link>
        //     <Link to={"/services/11"}>Edición Audiovisual</Link>
        //     <Link to={"/services/12"}>Make up</Link>
        //     <Link to={"/services/13"}>Styling</Link>
        //     <Link to={"/services/14"}>Producción de moda</Link>
                    
        //     <div>
        //         <Link to={"1"}>
        //             <div className="card bg1">
        //                 Producciones fotográficas
        //             </div>
        //         </Link>

        //         <Link to={"2"}>
        //             <div className="card bg2">
        //                 Producciones audiovisuales
        //             </div>
        //         </Link>

        //         <Link to={"3"}>
        //             <div className="card bg3">
        //                 Desarrollo de conceptos creativos
        //             </div>
        //         </Link>

        //         <Link to={"4"}>
        //             <div className="card bg4">
        //                 Dirección de arte
        //             </div>
        //         </Link>

        //         <Link to={"5"}>
        //             <div className="card bg5">
        //                 Video Clips
        //             </div>
        //         </Link>

        //         <Link to={"6"}>
        //             <div className="card bg6">
        //                 Mega producciones
        //             </div>
        //         </Link>

        //         <Link to={"7"}>
        //             <div className="card bg7">
        //                 Special Projects
        //             </div>
        //         </Link>

        //         <Link to={"8"}>
        //             <div className="card bg4">
        //                 Diseño y armado de escenografías
        //             </div>
        //         </Link>

        //         <Link to={"9"}>
        //             <div className="card bg3">
        //                 Scouting y realización de props
        //             </div>
        //         </Link>

        //         <Link to={"10"}>
        //             <div className="card bg2">
        //                 Retoque estético y montaje
        //             </div>
        //         </Link>

        //         <Link to={"11"}>
        //             <div className="card bg1">
        //                 Edición Audiovisual
        //             </div>
        //         </Link>

        //         <Link to={"12"}>
        //             <div className="card bg7">
        //                 Make up
        //             </div>
        //         </Link>

        //         <Link to={"13"}>
        //             <div className="card bg6">
        //                 Styling
        //             </div>
        //         </Link>

        //         <Link to={"14"}>
        //             <div className="card bg5">
        //                 Producción de moda
        //             </div>
        //         </Link>

        //     </div>


        //     {/* categorías 1 a 4 */}
        //     <div>

        //         <Link to={"1"}>
        //             <div className="card bg1">
        //                 Producciones fotográficas
        //             </div>
        //         </Link>

        //         <Link to={"2"}>
        //             <div className="card bg2">
        //                 Producciones audiovisuales
        //             </div>
        //         </Link>
                
        //         <Link to={"3"}>
        //             <div className="card bg3">
        //                 Desarrollo de conceptos creativos
        //             </div>
        //         </Link>

        //         <Link to={"4"}>
        //             <div className="card bg4">
        //                 Dirección de arte
        //             </div>
        //         </Link>

        //     </div>

        //     {/* categorías 5 a 7 */}
        //     <div>

        //         <Link to={"5"}>
        //             <div className="card bg5">
        //                 Video Clips
        //             </div>
        //         </Link>
                
        //         <Link to={"6"}>
        //             <div className="card bg6">
        //                 Mega producciones
        //             </div>
        //         </Link>

        //         <Link to={"7"}>
        //             <div className="card bg7">
        //                 Special Projects
        //             </div>
        //         </Link>

        //     </div>

        //     {/* categorías 8 a 11 */}
        //     <div>

        //         <Link to={"8"}>
        //             <div className="card bg4">
        //                 Diseño y armado de escenografías
        //             </div>
        //         </Link>

        //         <Link to={"9"}>
        //             <div className="card bg3">
        //                 Scouting y realización de props
        //             </div>
        //         </Link>

        //         <Link to={"10"}>
        //             <div className="card bg2">
        //                 Retoque estético y montaje
        //             </div>
        //         </Link>

        //         <Link to={"11"}>
        //             <div className="card bg1">
        //                 Edición Audiovisual
        //             </div>
        //         </Link>

        //     </div>

        //     {/* categorías 12 a 14 */}
        //     <div>

        //         <Link to={"12"}>
        //             <div className="card bg7">
        //                 Make up
        //             </div>
        //         </Link>

        //         <Link to={"13"}>
        //             <div className="card bg6">
        //                 Styling
        //             </div>
        //         </Link>

        //         <Link to={"14"}>
        //             <div className="card bg5">
        //                 Producción de moda
        //             </div>
        //         </Link>
                
        //     </div>
        // </div>
    
  )
}

export default Services