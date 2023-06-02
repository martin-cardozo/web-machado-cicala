import Navbar from '../components/Navbar'
import '../components/portfolio.css'


function Services() {
  return (
    <>
        <Navbar />

        <div className="slider">

            {/* categorías 1 a 4 */}
            <div className="slide-track-up-categ">
                <div className="card bg1">
                    <a href="">Producciones fotográficas</a>
                </div>
                <div className="card bg2">
                    <a href="">Producciones audiovisuales</a>
                </div>
                <div className="card bg3">
                    <a href="">Desarrollo de conceptos creativos</a>
                </div>
                <div className="card bg4">
                    <a href="">Dirección de arte</a>
                </div>

                <div className="card bg1">
                    <a href="">Producciones fotográficas</a>
                </div>
                <div className="card bg2">
                    <a href="">Producciones audiovisuales</a>
                </div>
                <div className="card bg3">
                    <a href="">Desarrollo de conceptos creativos</a>
                </div>
                <div className="card bg4">
                    <a href="">Dirección de arte</a>
                </div>
            </div>

            {/* categorías 5 a 7 */}
            <div className="slide-track-down-categ">
                <div className="card bg5">
                    <a href="">Video Clips</a>
                </div>
                <div className="card bg6">
                    <a href="">Mega producciones</a>
                </div>
                <div className="card bg7">
                    <a href="">Special Projects</a>
                </div>

                <div className="card bg5">
                    <a href="">Video Clips</a>
                </div>
                <div className="card bg6">
                    <a href="">Mega producciones</a>
                </div>
                <div className="card bg7">
                    <a href="">Special Projects</a>
                </div>
            </div>

            {/* categorías 8 a 11 */}
            <div className="slide-track-up-categ">
                <div className="card bg4">
                    <a href="">Diseño y armado de escenografías</a>
                </div>
                <div className="card bg3">
                    <a href="">Scouting y realización de props</a>
                </div>
                <div className="card bg2">
                    <a href="">Retoque estético y montaje</a>
                </div>
                <div className="card bg1">
                    <a href="">Edición Audiovisual</a>
                </div>

                <div className="card bg4">
                    <a href="">Diseño y armado de escenografías</a>
                </div>
                <div className="card bg3">
                    <a href="">Scouting y realización de props</a>
                </div>
                <div className="card bg2">
                    <a href="">Retoque estético y montaje</a>
                </div>
                <div className="card bg1">
                    <a href="">Edición Audiovisual</a>
                </div>
            </div>

            {/* categorías 12 a 14 */}
            <div className="slide-track-down-categ">
                <div className="card bg7">
                    <a href="">Make up</a>
                </div>
                <div className="card bg6">
                    <a href="">Styling</a>
                </div>
                <div className="card bg5">
                    <a href="">Producción de moda</a>
                </div>
                

                <div className="card bg7">
                    <a href="">Make up</a>
                </div>
                <div className="card bg6">
                    <a href="">Styling</a>
                </div>
                <div className="card bg5">
                    <a href="">Producción de moda</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Services