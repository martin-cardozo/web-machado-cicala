import React, {useState} from 'react'
import './navbar.css'
import miLogo from '../assets/MachadoCicala_logo_Negro.png'
import instagramLogo from '../assets/icons/icon-instagram.svg'
import tiktokLogo from '../assets/icons/icon-tiktok.svg'
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
                        <div class="dropdown-content" className={portfolioClass}>
                            <Link to={"/portfolio/1"} onClick={updateDropdown}>Advertising</Link>
                            <Link to={"/portfolio/2"} onClick={updateDropdown}>Beauty</Link>
                            <Link to={"/portfolio/3"} onClick={updateDropdown}>Celebrities</Link>
                            <Link to={"/portfolio/4"} onClick={updateDropdown}>Entertaiment</Link>
                            <Link to={"/portfolio/5"} onClick={updateDropdown}>Fashion</Link>
                            <Link to={"/portfolio/6"} onClick={updateDropdown}>Hair</Link>
                            <Link to={"/portfolio/7"} onClick={updateDropdown}>Lifestyle</Link>
                            <Link to={"/portfolio/8"} onClick={updateDropdown}>Films</Link>
                            <Link to={"/portfolio/9"} onClick={updateDropdown}>Short Films</Link>
                            <Link to={"/portfolio/10"} onClick={updateDropdown}>Music Videos</Link>
                            <Link to={"/portfolio/11"} onClick={updateDropdown}>Special Projects</Link>
                            <Link to={"/portfolio/12"} onClick={updateDropdown}>Still</Link>
                            <Link to={"/portfolio/13"} onClick={updateDropdown}>Kids</Link>
                            <Link to={"/portfolio/14"} onClick={updateDropdown}>Animals</Link>
                            <Link to={"/portfolio/15"} onClick={updateDropdown}>Cars</Link>
                        </div>
                    </div>
                    
                    <Link to={'/services'}>SERVICIOS</Link>
                    <Link to={'/contact'}>CONTACTO</Link>
                    <Link to={"https://www.instagram.com/machadocicala/?hl=es"} target='_blank'><img rel='icon' src={instagramLogo} alt="instagram" /></Link>
                    <Link to={"https://www.tiktok.com/@machadocicala"} target='_blank'><img rel='icon' src={tiktokLogo} alt="tiktok" /></Link>
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