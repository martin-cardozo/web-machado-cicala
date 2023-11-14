import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import "../components/services.css"
import data from "../assets/services/textos/textos.json"

function Services() {
  const { id } = useParams()
  const [selectedService, setSelectedService] = useState(null)
  const [activeOption, setActiveOption] = useState(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(window.innerWidth > 900) // Estado condicional para controlar la visibilidad del menú desplegable

  useEffect(() => {
    // Filtrar el servicio seleccionado por id
    if (id && data[id]) {
      setSelectedService(data[id])
      setActiveOption(id) // Establecer la opción activa al cargar el servicio
    }
  }, [id])

  useEffect(() => {
    // Manejar el evento de redimensionamiento
    const handleResize = () => {
      setIsDropdownOpen(window.innerWidth > 900)
    }

    // Agregar el oyente de redimensionamiento al montar el componente
    window.addEventListener("resize", handleResize)

    // Eliminar el oyente de redimensionamiento al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  function toggleDropdown() {
    setIsDropdownOpen(!isDropdownOpen)

    // Si está abriendo el dropdown, agrega la clase de animación
    if (!isDropdownOpen) {
      setTimeout(() => {
        const serviceLinks = document.querySelector(".dropdown-links")
        serviceLinks.classList.add("animate")
      }, 0)
    } else {
      // Si está cerrando el dropdown, elimina la clase de animación después de que se complete la animación de cierre
      const serviceLinks = document.querySelector(".dropdown-links")
      serviceLinks.classList.remove("animate")
    }
  }

  /* Color de fondo de la imagen mientras carga en la escala de grises */
  function grey() {
    var v = ((Math.random() * 256) | 200).toString(16)
    return "#" + v + v + v
  }

  return (
    <>
      <div className="services">
        <section className="service-menu">
          <div className="dropdown-header" onClick={toggleDropdown}>
            <p>SERVICIOS</p>
            {isDropdownOpen ? (
              <i className="fa fa-chevron-up"></i> // Puedes utilizar un icono como FontAwesome para indicar que es desplegable
            ) : (
              <i className="fa fa-chevron-down"></i>
            )}
          </div>
          {isDropdownOpen && (
            <div className="dropdown-links">
              {Object.keys(data).map((serviceName) => (
                <Link
                  key={data[serviceName].id}
                  to={`/services/${serviceName}`}
                  onClick={() => {
                    setActiveOption(serviceName)
                    if (window.innerWidth <= 800) {
                      toggleDropdown()
                    }
                  }}
                  className={activeOption === serviceName ? "active" : ""}
                >
                  {data[serviceName].menu_text}
                </Link>
              ))}
            </div>
          )}
        </section>

        <section className="service-image">
          {selectedService && (
            <div key={selectedService.id}>
              {selectedService.text !== "" && (
                <div className="service-text">
                  <p>{selectedService.text}</p>
                </div>
              )}

              <div style={{ backgroundColor: grey() }}>
                <img
                  src={`/assets/services/${id}.${selectedService.extension}`}
                  alt="slides"
                />
              </div>
            </div>
          )}
        </section>
      </div>
    </>
  )
}

export default Services
