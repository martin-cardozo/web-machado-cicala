import React, {useState} from 'react'
import './navbar.css'
import miLogo from '../assets/MachadoCicala_logo_Negro.png'
import Menu from './Menu'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {

    // Para cambiar las clases del menú hamburguesa
    const [burgerClass, setBurgerClass] = useState("burger-bar unclicked")
    const [menuClass, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

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


    return(
        <>
            <header>
                <Link to={"/"} className="logo">
                    <img src={miLogo} alt="logo de la empresa" />
                </Link>
                
                
                <nav>
                    <div className="burger-menu" onClick={updateMenu}>
                        <div className={burgerClass} ></div>
                        <div className={burgerClass} ></div>
                        <div className={burgerClass} ></div>
                    </div>
                </nav>

                <div className={menuClass}>
                    <Menu/>
                </div>
            </header>
            
            <Outlet />
        </>
    )
}

export default Navbar