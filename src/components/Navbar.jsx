import React, {useState} from 'react'
import './navbar.css'
import miLogo from '../assets/MachadoCicala_logo_Negro.png'
import instagramLogo from '../assets/icons/icon-instagram.png'
import tiktokLogo from '../assets/icons/icon-tiktok.svg'
import linkedinLogo from '../assets/icons/icon-linkedin.png'
import Menu from './Menu'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {

    // Para cambiar las clases del menú hamburguesa
    const [burgerClass, setBurgerClass] = useState("burger-bar unclicked")
    const [menuClass, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const [isPortfolioClicked, setIsPortfolioClicked] = useState(false)
    const [portfolioClass, setPortfolioClass] = useState("dropdown-content hidden")


    // Icono de menú hamburguesa
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }


    // Ocultar dropdown cuando se hace click en un item
    const updateDropdown = () => {
        $(".dropdown-content").hide()
    }

    const pinDropdown = () => {
        if(!isPortfolioClicked) {
            setPortfolioClass("dropdown-content visible")
        }
        else {
            setPortfolioClass("dropdown-content hidden")
        }
        setIsPortfolioClicked(!isPortfolioClicked)
    }


    return(
        <>
            <header>
                <Link to={"/"} className="logo">
                    <img src={miLogo} alt="logo de la empresa" />
                </Link>

                <div className='navbar-menu'>
                    <Link to={'/about'}>BIOGRAFÍA</Link>

                    <div className='dropdown'>
                        <Link to={'#'} onClick={pinDropdown}>PORTFOLIO</Link>
                        <div className={`dropdown-content ${portfolioClass}`}>
                            <Link to={"#"} style={{cursor: 'default'}}><strong>Fotografía</strong></Link>
                            <Link to={"/portfolio/advertising"} onClick={updateDropdown}>Advertising</Link>
                            <Link to={"/portfolio/beauty"} onClick={updateDropdown}>Beauty</Link>
                            <Link to={"/portfolio/celebrities"} onClick={updateDropdown}>Celebrities</Link>
                            <Link to={"/portfolio/entertaiment"} onClick={updateDropdown}>Entertaiment</Link>
                            <Link to={"/portfolio/fashion"} onClick={updateDropdown}>Fashion</Link>
                            <Link to={"/portfolio/hair"} onClick={updateDropdown}>Hair</Link>
                            <Link to={"/portfolio/lifestyle"} onClick={updateDropdown}>Lifestyle</Link>
                            <Link to={"/portfolio/kids"} onClick={updateDropdown}>Kids</Link>
                            <Link to={"/portfolio/animals"} onClick={updateDropdown}>Animals</Link>
                            <Link to={"/portfolio/cars"} onClick={updateDropdown}>Cars</Link>
                            <Link to={"/portfolio/special-projects"} onClick={updateDropdown}>Special Projects</Link>
                            <Link to={"/portfolio/still"} onClick={updateDropdown}>Still</Link>
                            <Link to={"#"} style={{cursor: 'default'}}><strong>Audiovisual</strong></Link>
                            <Link to={"/portfolio/films"} onClick={updateDropdown}>Films</Link>
                            <Link to={"/portfolio/short-films"} onClick={updateDropdown}>Short Films</Link>
                            <Link to={"/portfolio/music"} onClick={updateDropdown}>Music</Link>
                            <Link to={"/portfolio/videos"} onClick={updateDropdown}>Videos</Link>
                        </div>
                    </div>
                    
                    <Link to={'/services/1'}>SERVICIOS</Link>
                    <Link to={'/contact'}>CONTACTO</Link>
                    
                    <div className='social-networks'>
                        <p>Encontranos en: </p> 
                        <Link to={"https://www.instagram.com/machadocicala/?hl=es"} target='_blank'><img rel='icon' src={instagramLogo} alt="instagram" /></Link>
                        <Link to={"https://www.tiktok.com/@machadocicala"} target='_blank'><img rel='icon' src={tiktokLogo} alt="tiktok" /></Link>
                        <Link to={"https://www.linkedin.com/company/machado-cicala/mycompany/"} target='_blank'><img rel='icon' src={linkedinLogo} alt="linkedin" /></Link>
                    </div>
                    
                </div>
                
                
                <nav>
                    <div className="burger-menu" onClick={updateMenu}>
                        <div className={burgerClass} ></div>
                        <div className={burgerClass} ></div>
                        <div className={burgerClass} ></div>
                    </div>
                </nav>

                <div className={menuClass}>
                    <Menu setBurgerClass={setBurgerClass} setMenuClass={setMenuClass} isMenuClicked={isMenuClicked} setIsMenuClicked={setIsMenuClicked}/>
                </div>
            </header>
            
            <Outlet />
        </>
    )
}

export default Navbar