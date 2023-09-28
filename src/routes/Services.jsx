import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import "../components/services.css"
import data from "../assets/services/textos/textos.json"

function Services() {
  const { name } = useParams()
  const [selectedService, setSelectedService] = useState(null)

  useEffect(() => {
    // Filtrar el servicio seleccionado por nombre
    if (name && data[name]) {
      setSelectedService(data[name])
    }
  }, [name])

  /* Color de fondo de la imagen mientras carga en la escala de grises */
  function grey() {
    var v = ((Math.random() * 256) | 200).toString(16)
    return "#" + v + v + v
  }

  return (
    <>
      <div className="services">
        <section className="service-menu">
          {Object.keys(data).map((serviceName) => (
            <Link key={data[serviceName].id} to={`/services/${serviceName}`}>
              {data[serviceName].menu_text}
            </Link>
          ))}
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
                  src={`/assets/services/${name}.${selectedService.extension}`}
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
