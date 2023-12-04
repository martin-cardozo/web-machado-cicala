import React, { useState, useEffect } from "react"
import "./navbar.css"
import miLogo from "../assets/MachadoCicala_logo_Negro.png"
import instagramLogo from "../assets/icons/icon-instagram.png"
import tiktokLogo from "../assets/icons/icon-tiktok.svg"
import linkedinLogo from "../assets/icons/icon-linkedin.png"
import Menu from "./Menu"
import { Link, Outlet, useLocation } from "react-router-dom"

const Navbar = () => {
  // Para cambiar las clases del menú hamburguesa
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked")
  const [menuClass, setMenuClass] = useState("menu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)

//   const [isPortfolioClicked, setIsPortfolioClicked] = useState(false)
  const [portfolioClass, setPortfolioClass] = useState(
    "dropdown-content hidden"
  )

  // Para saber ubicación en la página
  const [activeCategory, setActiveCategory] = useState("") // Nuevo estado para la categoría activa
  const [activePortfolioSubcategory, setActivePortfolioSubcategory] =
    useState("")
  const location = useLocation()

  // Icono de menú hamburguesa
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked")
      setMenuClass("menu visible")
    } else {
      setBurgerClass("burger-bar unclicked")
      setMenuClass("menu hidden")
    }
    setIsMenuClicked(!isMenuClicked)
  }

  // Ocultar dropdown cuando se hace click en un item
  const updateDropdown = () => {
    $(".dropdown-content").hide()
  }

//   const pinDropdown = () => {
//     if (!isPortfolioClicked) {
//       setPortfolioClass("dropdown-content visible")
//     } else {
//       setPortfolioClass("dropdown-content hidden")
//     }
//     setIsPortfolioClicked(!isPortfolioClicked)
//   }

  // Manejo del estado para resaltar la ubicación actual en la página
  const handleCategoryClick = (category) => {
    setActiveCategory(category)
    setActivePortfolioSubcategory("") // Reinicia la subcategoría al hacer clic en una categoría principal
  }

  const handlePortfolioSubcategoryClick = (subcategory) => {
    setActivePortfolioSubcategory(subcategory)
    updateDropdown()
  }

  const isAboutCategoryActive = activeCategory.includes("/about") // Verifica si la categoría activa contiene "/about"
  const isServicesCategoryActive = activeCategory.includes("/services") // Verifica si la categoría activa contiene "/services"
  const isPortfolioCategoryActive = activeCategory.includes("/portfolio")

  useEffect(() => {
    // Actualizar la categoría activa cuando la ruta cambia
    const pathname = location.pathname
    setActiveCategory(pathname)

    // También considera la subcategoría en el dropdown de Portfolio
    const portfolioSubcategory = pathname.split("/portfolio/")[1]
    setActivePortfolioSubcategory(portfolioSubcategory || "") // Si no hay subcategoría, establece una cadena vacía
  }, [location])

  return (
    <>
      <header>
        <Link to={"/"} className="logo">
          <img src={miLogo} alt="logo de la empresa" />
        </Link>

        <div className="navbar-menu">
          <Link
            to={"/about"}
            className={isAboutCategoryActive ? "active" : ""}
            onClick={() => handleCategoryClick("/about")}
          >
            BIOGRAFÍA
          </Link>

          <div className="dropdown">
            <Link
              to={"#"}
            //   onClick={pinDropdown}
              className={isPortfolioCategoryActive ? "active" : ""}
            >
              PORTFOLIO
            </Link>
            <div className={`dropdown-content ${portfolioClass}`}>
              <Link to={"#"} style={{ cursor: "default" }}>
                <strong>FOTOGRAFÍA</strong>
              </Link>
              <Link
                to={"/portfolio/advertising"}
                onClick={() => handlePortfolioSubcategoryClick("advertising")}
                className={
                  activePortfolioSubcategory === "advertising" ? "active" : ""
                }
              >
                Advertising
              </Link>
              <Link
                to={"/portfolio/beauty"}
                onClick={() => handlePortfolioSubcategoryClick("beauty")}
                className={
                  activePortfolioSubcategory === "beauty" ? "active" : ""
                }
              >
                Beauty
              </Link>
              <Link
                to={"/portfolio/celebrities"}
                onClick={() => handlePortfolioSubcategoryClick("celebrities")}
                className={
                  activePortfolioSubcategory === "celebrities" ? "active" : ""
                }
              >
                Celebrities
              </Link>
              <Link
                to={"/portfolio/entertainment"}
                onClick={() => handlePortfolioSubcategoryClick("entertainment")}
                className={
                  activePortfolioSubcategory === "entertainment" ? "active" : ""
                }
              >
                Entertainment
              </Link>
              <Link
                to={"/portfolio/fashion"}
                onClick={() => handlePortfolioSubcategoryClick("fashion")}
                className={
                  activePortfolioSubcategory === "fashion" ? "active" : ""
                }
              >
                Fashion
              </Link>
              <Link
                to={"/portfolio/hair"}
                onClick={() => handlePortfolioSubcategoryClick("hair")}
                className={
                  activePortfolioSubcategory === "hair" ? "active" : ""
                }
              >
                Hair
              </Link>
              <Link
                to={"/portfolio/lifestyle"}
                onClick={() => handlePortfolioSubcategoryClick("lifestyle")}
                className={
                  activePortfolioSubcategory === "lifestyle" ? "active" : ""
                }
              >
                Lifestyle
              </Link>
              <Link
                to={"/portfolio/kids"}
                onClick={() => handlePortfolioSubcategoryClick("kids")}
                className={
                  activePortfolioSubcategory === "kids" ? "active" : ""
                }
              >
                Kids
              </Link>
              <Link
                to={"/portfolio/animals"}
                onClick={() => handlePortfolioSubcategoryClick("animals")}
                className={
                  activePortfolioSubcategory === "animals" ? "active" : ""
                }
              >
                Animals
              </Link>
              <Link
                to={"/portfolio/cars"}
                onClick={() => handlePortfolioSubcategoryClick("cars")}
                className={
                  activePortfolioSubcategory === "cars" ? "active" : ""
                }
              >
                Cars
              </Link>
              <Link
                to={"/portfolio/specialprojects"}
                onClick={() =>
                  handlePortfolioSubcategoryClick("specialprojects")
                }
                className={
                  activePortfolioSubcategory === "specialprojects"
                    ? "active"
                    : ""
                }
              >
                Special Projects
              </Link>
              <Link
                to={"/portfolio/products"}
                onClick={() => handlePortfolioSubcategoryClick("products")}
                className={
                  activePortfolioSubcategory === "products" ? "active" : ""
                }
              >
                Products
              </Link>
              <Link to={"#"} style={{ cursor: "default" }}>
                <strong>AUDIOVISUAL</strong>
              </Link>
              <Link
                to={"/portfolio/films"}
                onClick={() => handlePortfolioSubcategoryClick("films")}
                className={
                  activePortfolioSubcategory === "films" ? "active" : ""
                }
              >
                Films
              </Link>
              <Link
                to={"/portfolio/shortfilms"}
                onClick={() => handlePortfolioSubcategoryClick("shortfilms")}
                className={
                  activePortfolioSubcategory === "shortfilms" ? "active" : ""
                }
              >
                Short Films
              </Link>
              <Link
                to={"/portfolio/musicvideos"}
                onClick={() => handlePortfolioSubcategoryClick("musicvideos")}
                className={
                  activePortfolioSubcategory === "musicvideos" ? "active" : ""
                }
              >
                Music Videos
              </Link>
            </div>
          </div>

          <Link
            to={"/services/1"}
            className={isServicesCategoryActive ? "active" : ""}
            onClick={() => handleCategoryClick("/services")}
          >
            SERVICIOS
          </Link>
          <Link
            to={"/contact"}
            className={activeCategory === "/contact" ? "active" : ""}
            onClick={() => handleCategoryClick("/contact")}
          >
            CONTACTO
          </Link>

          <div className="social-networks">
            <p>Encontranos en: </p>
            <Link
              to={"https://www.instagram.com/machadocicala/?hl=es"}
              target="_blank"
            >
              <img rel="icon" src={instagramLogo} alt="instagram" />
            </Link>
            <Link to={"https://www.tiktok.com/@machadocicala"} target="_blank">
              <img rel="icon" src={tiktokLogo} alt="tiktok" />
            </Link>
            <Link
              to={"https://www.linkedin.com/company/machado-cicala/mycompany/"}
              target="_blank"
            >
              <img rel="icon" src={linkedinLogo} alt="linkedin" />
            </Link>
          </div>
        </div>

        <nav>
          <div className="burger-menu" onClick={updateMenu}>
            <div className={burgerClass}></div>
            <div className={burgerClass}></div>
            <div className={burgerClass}></div>
          </div>
        </nav>

        <div className={menuClass}>
          <Menu
            setBurgerClass={setBurgerClass}
            setMenuClass={setMenuClass}
            isMenuClicked={isMenuClicked}
            setIsMenuClicked={setIsMenuClicked}
          />
        </div>
      </header>

      <Outlet />
    </>
  )
}

export default Navbar
