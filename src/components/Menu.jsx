import React from 'react'
import './navbar.css'
import instagramLogo from '../assets/icons/icon-instagram.svg'

function Menu() {
  return (
    <div className='menu-container'>
        <div className='menu-col'>
            <ul>
                <li><a href=""><strong>NOSOTROS</strong></a></li>
            </ul>
        </div>
        <div className='menu-col'>
            <ul>
                <li><a href=""><strong>FOTOGRAFÍA</strong></a></li>
                <li><a href="">Beauty</a></li>
                <li><a href="">Advertising</a></li>
                <li><a href="">Celebrities</a></li>
                <li><a href="">Fashion</a></li>
                <li><a href="">Especiales</a></li>
            </ul>
        </div>
        <div className='menu-col'>
            <ul>
                <li><a href=""><strong>AUDIOVISUAL</strong></a></li>
                <li><a href="">Video Clips</a></li>
                <li><a href="">Comerciales</a></li>
                <li><a href="">Cortometrajes</a></li>
                <li><a href="">Trailers (con Shock House)</a></li>
            </ul>
        </div>
        <div className='menu-col'>
            <ul>
                <li><a href=""><strong>CONTACTO</strong></a></li>
                <li><a href=""><img rel='icon' src={instagramLogo} alt="instagram" /></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Menu