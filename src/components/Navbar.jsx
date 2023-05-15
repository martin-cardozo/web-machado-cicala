import React, {useState} from 'react'
import './navbar.css'
import miLogo from '../assets/MachadoCicala_logo_Negro.png'
import Menu from './Menu'

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
        <header>
            <img className="logo" src={miLogo} alt="logo de la empresa" />
            
            
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
    )
}

export default Navbar