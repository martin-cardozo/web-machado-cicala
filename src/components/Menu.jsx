import React from 'react'
import './navbar.css'
import instagramLogo from '../assets/icons/icon-instagram.svg'
import tiktokLogo from '../assets/icons/icon-tiktok.svg'
import emailLogo from '../assets/icons/icon-email.svg'

import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div className='menu-container'>
        <div className='menu-col'>
            <ul>
                <li><Link to={"/about"}><strong>BIOGRAFÍA</strong></Link> </li>
            </ul>
        </div>
        <div className='menu-col'>
            <ul>
                <li><Link to={"/portfolio"}><strong>PORTFOLIO</strong></Link></li>
                <li><Link to={"/portfolio/1"}>Advertising</Link></li>
                <li><Link to={"/portfolio/2"}>Beauty</Link></li>
                <li><Link to={"/portfolio/3"}>Celebrities</Link></li>
                <li><Link to={"/portfolio/4"}>Entertaiment</Link></li>
                <li><Link to={"/portfolio/5"}>Fashion</Link></li>
                <li><Link to={"/portfolio/6"}>Hair</Link></li>
                <li><Link to={"/portfolio/7"}>Lifestyle</Link></li>
                <li><Link to={"/portfolio/8"}>Films (+ AD Films)</Link></li>
                <li><Link to={"/portfolio/9"}>Short Films - Music Videos</Link></li>
                <li><Link to={"/portfolio/10"}>Special Projects</Link></li>
                <li><Link to={"/portfolio/11"}>Still</Link></li>
                <li><Link to={"/portfolio/12"}>Kids</Link></li>
                <li><Link to={"/portfolio/13"}>Animals</Link></li>
                <li><Link to={"/portfolio/14"}>Cars</Link></li>
                
            </ul>
        </div>
        <div className='menu-col'>
            <ul>
                <li><Link to={"/services"}><strong>SERVICIOS</strong></Link></li>
                <li><Link to={"/services/1"}>Producciones fotográficas</Link></li>
                <li><Link to={"/services/2"}>Producciones audiovisuales</Link></li>
                <li><Link to={"/services/3"}>Desarrollo de conceptos creativos</Link></li>
                <li><Link to={"/services/4"}>Dirección de arte</Link></li>
                <li><Link to={"/services/5"}>Video Clips</Link></li>
                <li><Link to={"/services/6"}>Mega producciones</Link></li>
                <li><Link to={"/services/7"}>Special Projects</Link></li>
                <li><Link to={"/services/8"}>Diseño y armado de escenografías</Link></li>
                <li><Link to={"/services/9"}>Scouting y realización de props</Link></li>
                <li><Link to={"/services/10"}>Retoque estético y montaje</Link></li>
                <li><Link to={"/services/11"}>Edición Audiovisual</Link></li>
                <li><Link to={"/services/12"}>Make up</Link></li>
                <li><Link to={"/services/13"}>Styling</Link></li>
                <li><Link to={"/services/14"}>Producción de moda</Link></li>
                
            </ul>
        </div>
        <div className='menu-col'>
            <ul>
                <li><Link to={"#"}><strong>CONTACTO</strong></Link></li>
                <li><a href=""><img rel='icon' src={emailLogo} alt="email" />contacto@machadocicala.com.ar</a></li>
                <li><a href=""><img rel='icon' src={instagramLogo} alt="instagram" />@machadocicala</a></li>
                <li><a href=""><img rel='icon' src={tiktokLogo} alt="tiktok" />@machadocicala</a></li>
                <li><a href=""><img rel='icon' src={instagramLogo} alt="instagram" />@josecicala</a></li>
                <li><a href=""><img rel='icon' src={instagramLogo} alt="instagram" />@machaditoarte</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Menu