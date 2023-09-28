import React from 'react'
import './navbar.css'
import instagramLogo from '../assets/icons/icon-instagram.png'
import tiktokLogo from '../assets/icons/icon-tiktok.svg'
import emailLogo from '../assets/icons/icon-email.svg'
import linkedinLogo from '../assets/icons/icon-linkedin.png'


import { Link } from 'react-router-dom'

function Menu({setBurgerClass, setMenuClass, isMenuClicked, setIsMenuClicked}) {

    const updateMenu = () => {
        if(isMenuClicked) {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
            setIsMenuClicked(!isMenuClicked)
        }
    }


    return (
        <div className='menu-container'>
            <div className='menu-col'>
                <ul>
                    <li onClick={updateMenu}><Link to={"/about"}><strong>BIOGRAFÍA</strong></Link> </li>
                </ul>
            </div>
            <div className='menu-col'>
                <ul>
                    <li><Link to={"#"}><strong>PORTFOLIO</strong></Link></li>
                    <li><Link to={"#"} style={{cursor: 'default'}}><strong>Fotografía</strong></Link></li>
                    <li onClick={updateMenu}><Link to={"/portfolio/advertising"}>Advertising</Link></li>
                    <li onClick={updateMenu}><Link to={"/portfolio/beauty"}>Beauty</Link></li>
                    <li onClick={updateMenu}><Link to={"/portfolio/celebrities"}>Celebrities</Link></li>
                    <li onClick={updateMenu}><Link to={"/portfolio/entertaiment"}>Entertaiment</Link></li>
                    <li onClick={updateMenu}><Link to={"/portfolio/fashion"}>Fashion</Link></li>
                    <li onClick={updateMenu}><Link to={"/portfolio/hair"}>Hair</Link></li>
                    <li onClick={updateMenu}><Link to={"/portfolio/lifestyle"}>Lifestyle</Link></li>
                    <li onClick={updateMenu}><Link to={"/portfolio/kids"}>Kids</Link></li>
                    <li onClick={updateMenu}><Link to={"/portfolio/animals"}>Animals</Link></li>
                    <li onClick={updateMenu}><Link to={"/portfolio/cars"}>Cars</Link></li>
                    <li><Link to={"#"} style={{cursor: 'default'}}><strong>Audiovisual</strong></Link></li>
                    <li onClick={updateMenu}><Link to={"/portfolio/films"}>Films</Link></li>
                    <li onClick={updateMenu}><Link to={"/portfolio/short-films"}>Short Films</Link></li>
                    <li onClick={updateMenu}><Link to={"/portfolio/music"}>Music</Link></li>
                    <li onClick={updateMenu}><Link to={"/portfolio/videos"}>Videos</Link></li>
                    <li onClick={updateMenu}><Link to={"/portfolio/special-projects"}>Special Projects</Link></li>
                    <li onClick={updateMenu}><Link to={"/portfolio/still"}>Still</Link></li>
                    
                </ul>
            </div>
            <div className='menu-col'>
                <ul>
                    <li><Link to={"#"}><strong>SERVICIOS</strong></Link></li>
                    <li onClick={updateMenu}><Link to={"/services/producciones-fotograficas"}>Producciones fotográficas</Link></li>
                    <li onClick={updateMenu}><Link to={"/services/producciones-audiovisuales"}>Producciones audiovisuales</Link></li>
                    <li onClick={updateMenu}><Link to={"/services/desarrollo-de-conceptos-creativos"}>Desarrollo de conceptos creativos</Link></li>
                    <li onClick={updateMenu}><Link to={"/services/direccion-de-arte"}>Dirección de arte</Link></li>
                    <li onClick={updateMenu}><Link to={"/services/video-clips"}>Video clips</Link></li>
                    <li onClick={updateMenu}><Link to={"/services/mega-producciones"}>Mega producciones</Link></li>
                    <li onClick={updateMenu}><Link to={"/services/special-projects"}>Special projects</Link></li>
                    <li onClick={updateMenu}><Link to={"/services/diseño-y-armado-de-escenografias"}>Diseño y armado de escenografías</Link></li>
                    <li onClick={updateMenu}><Link to={"/services/scouting-y-realizacion-de-props"}>Scouting y realización de props</Link></li>
                    <li onClick={updateMenu}><Link to={"/services/retoque-estetico"}>Retoque estético</Link></li>
                    <li onClick={updateMenu}><Link to={"/services/montaje"}>Montaje</Link></li>
                    <li onClick={updateMenu}><Link to={"/services/edicion-audiovisual"}>Edición audiovisual</Link></li>
                    <li onClick={updateMenu}><Link to={"/services/make-up"}>Make up</Link></li>
                    <li onClick={updateMenu}><Link to={"/services/styling"}>Styling</Link></li>
                    <li onClick={updateMenu}><Link to={"/services/produccion-de-moda"}>Producción de moda</Link></li>
                    
                </ul>
            </div>
            <div className='menu-col'>
                <ul>
                    <li ><Link to={"/contact"}><strong>CONTACTO</strong></Link></li>
                    <li onClick={updateMenu}><Link to={"#"}><img rel='icon' src={emailLogo} alt="email" />contacto@machadocicala.com.ar</Link></li>
                    <li onClick={updateMenu}><Link to={"https://www.instagram.com/machadocicala/?hl=es"} target='_blank'><img rel='icon' src={instagramLogo} alt="instagram" />@machadocicala</Link></li>
                    <li onClick={updateMenu}><Link to={"https://www.tiktok.com/@machadocicala"} target='_blank'><img rel='icon' src={tiktokLogo} alt="tiktok" />@machadocicala</Link></li>
                    <li onClick={updateMenu}><Link to={"https://www.instagram.com/josecicala/?hl=es"} target='_blank'><img rel='icon' src={instagramLogo} alt="instagram" />@josecicala</Link></li>
                    <li onClick={updateMenu}><Link to={"https://www.instagram.com/machadito_arte/?hl=es"} target='_blank'><img rel='icon' src={instagramLogo} alt="instagram" />@machadito_arte</Link></li>
                    <li onClick={updateMenu}><Link to={"https://www.linkedin.com/company/machado-cicala/mycompany/"} target='_blank'><img rel='icon' src={linkedinLogo} alt="linkedin" />machado-cicala</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Menu