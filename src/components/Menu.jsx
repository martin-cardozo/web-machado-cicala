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
                <li><a href="">Advertising</a></li>
                <li><a href="">Beauty</a></li>
                <li><a href="">Celebrities</a></li>
                <li><a href="">Entertaiment</a></li>
                <li><a href="">Fashion</a></li>
                <li><a href="">Hair</a></li>
                <li><a href="">Lifestyle</a></li>
                <li><a href="">Films (+ AD Films)</a></li>
                <li><a href="">Short Films - Music Videos</a></li>
                <li><a href="">Special Projects</a></li>
                <li><a href="">Still</a></li>
                <li><a href="">Kids</a></li>
                <li><a href="">Animals</a></li>
                <li><a href="">Cars</a></li>
            </ul>
        </div>
        <div className='menu-col'>
            <ul>
                <li><Link to={"/services"}><strong>SERVICIOS</strong></Link></li>
                <li><a href="">Producciones fotográficas</a></li>
                <li><a href="">Producciones audiovisuales</a></li>
                <li><a href="">Desarrollo de conceptos creativos</a></li>
                <li><a href="">Dirección de arte</a></li>
                <li><a href="">Video Clips</a></li>
                <li><a href="">Mega producciones</a></li>
                <li><a href="">Special Projects</a></li>
                <li><a href="">Diseño y armado de escenografías</a></li>
                <li><a href="">Scouting y realización de props</a></li>
                <li><a href="">Retoque estético y montaje</a></li>
                <li><a href="">Edición Audiovisual</a></li>
                <li><a href="">Make up</a></li>
                <li><a href="">Styling</a></li>
                <li><a href="">Producción de moda</a></li>
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