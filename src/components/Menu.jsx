import React from 'react'
import './navbar.css'
import instagramLogo from '../assets/icons/icon-instagram.svg'
import tiktokLogo from '../assets/icons/icon-tiktok.svg'
import emailLogo from '../assets/icons/icon-email.svg'

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
                    <li onClick={updateMenu}><Link to={"/portfolio/1"}>Advertising</Link></li>
                    <li onClick={updateMenu}><Link to={"/portfolio/2"}>Beauty</Link></li>
                    <li onClick={updateMenu}><Link to={"/portfolio/3"}>Celebrities</Link></li>
                    <li onClick={updateMenu}><Link to={"/portfolio/4"}>Entertaiment</Link></li>
                    <li onClick={updateMenu}><Link to={"/portfolio/5"}>Fashion</Link></li>
                    <li onClick={updateMenu}><Link to={"/portfolio/6"}>Hair</Link></li>
                    <li onClick={updateMenu}><Link to={"/portfolio/7"}>Lifestyle</Link></li>
                    <li onClick={updateMenu}><Link to={"/portfolio/8"}>Films</Link></li>
                    <li onClick={updateMenu}><Link to={"/portfolio/9"}>Short Films</Link></li>
                    <li onClick={updateMenu}><Link to={"/portfolio/10"}>Music Videos</Link></li>
                    <li onClick={updateMenu}><Link to={"/portfolio/11"}>Special Projects</Link></li>
                    <li onClick={updateMenu}><Link to={"/portfolio/12"}>Still</Link></li>
                    <li onClick={updateMenu}><Link to={"/portfolio/13"}>Kids</Link></li>
                    <li onClick={updateMenu}><Link to={"/portfolio/14"}>Animals</Link></li>
                    <li onClick={updateMenu}><Link to={"/portfolio/15"}>Cars</Link></li>
                    
                </ul>
            </div>
            <div className='menu-col'>
                <ul>
                    <li onClick={updateMenu}><Link to={"/services"}><strong>SERVICIOS</strong></Link></li>
                </ul>
            </div>
            <div className='menu-col'>
                <ul>
                    <li ><Link to={"#"}><strong>CONTACTO</strong></Link></li>
                    <li onClick={updateMenu}><Link to={"#"}><img rel='icon' src={emailLogo} alt="email" />contacto@machadocicala.com.ar</Link></li>
                    <li onClick={updateMenu}><Link to={"https://www.instagram.com/machadocicala/?hl=es"} target='_blank'><img rel='icon' src={instagramLogo} alt="instagram" />@machadocicala</Link></li>
                    <li onClick={updateMenu}><Link to={"https://www.tiktok.com/@machadocicala"} target='_blank'><img rel='icon' src={tiktokLogo} alt="tiktok" />@machadocicala</Link></li>
                    <li onClick={updateMenu}><Link to={"https://www.instagram.com/josecicala/?hl=es"} target='_blank'><img rel='icon' src={instagramLogo} alt="instagram" />@josecicala</Link></li>
                    <li onClick={updateMenu}><Link to={"https://www.instagram.com/machadito_arte/?hl=es"} target='_blank'><img rel='icon' src={instagramLogo} alt="instagram" />@machadito_arte</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Menu