import { Link, useParams } from "react-router-dom"
import "../components/services.css"
import service1 from "../assets/images/services/producciones_audiovisuales.jpg"
import service2 from "../assets/images/services/producciones_fotograficas.jpg"
import service3 from "../assets/images/services/desarrollo_de_conceptos_creativos.jpg"
import service4 from "../assets/images/services/direccion_de_arte.jpg"
import service5 from "../assets/images/services/video_clips.jpg"
import service6 from "../assets/images/services/mega_producciones.jpg"
import service7 from "../assets/images/services/special_projects.jpg"
import service8 from "../assets/images/services/diseño_y_armado_de_escenografias.jpg"
import service9 from "../assets/images/services/scouting_y_realizacion_de_props.jpg"
import service10 from "../assets/images/services/retoque_estetico.jpg"
import service11 from "../assets/images/services/montaje.jpg"
import service12 from "../assets/images/services/edicion_audiovisual.jpg"
import service13 from "../assets/images/services/make_up.jpg"
import service14 from "../assets/images/services/styling.jpg"
import service15 from "../assets/images/services/produccion_de_moda.jpg"

function Services() {
  const {name} = useParams()

  let services = [
    {
      id: 1,
      text: "Texto muy corto 1 que habla sobre este servicio",
      "Text Name": "PRODUCCIONES FOTOGRÁFICAS",
      "Archive Name": "producciones_fotograficas",
      image: service1,
    },
    {
      id: 2,
      text: "",
      "Text Name": "PRODUCCIONES AUDIOVISUALES",
      "Archive Name": "producciones_audiovisuales",
      image: service2,
    },
    {
      id: 3,
      text: "Texto muy corto 3 que habla sobre este servicio",
      "Text Name": "DESARROLLO DE CONCEPTOS CREATIVOS",
      "Archive Name": "desarrollo_de_conceptos_creativos",
      image: service3,
    },
    {
      id: 4,
      text: "Texto muy corto 4 que habla sobre este servicio",
      "Text Name": "DIRECCIÓN DE ARTE",
      "Archive Name": "direccion_de_arte",
      image: service4,
    },
    {
      id: 5,
      text: "Texto muy corto 5 que habla sobre este servicio",
      "Text Name": "VIDEO CLIPS",
      "Archive Name": "video_clips",
      image: service5,
    },
    {
      id: 6,
      text: "Texto muy corto 6 que habla sobre este servicio",
      "Text Name": "MEGA PRODUCCIONES",
      "Archive Name": "mega_producciones",
      image: service6,
    },
    {
      id: 7,
      text: "Texto muy corto 7 que habla sobre este servicio",
      "Text Name": "SPECIAL PROJECTS",
      "Archive Name": "special_projects",
      image: service7,
    },
    {
      id: 8,
      text: "Texto muy corto 8 que habla sobre este servicio",
      "Text Name": "DISEÑO Y ARMADO DE ESCENOGRAFÍAS",
      "Archive Name": "diseño_y_armado_de_escenografias",
      image: service8,
    },
    {
      id: 9,
      text: "Texto muy corto 9 que habla sobre este servicio",
      "Text Name": "SCOUTING Y REALIZACIÓN DE PROPS",
      "Archive Name": "scouting_y_realizacion_de_props",
      image: service9,
    },
    {
      id: 10,
      text: "Texto muy corto 10 que habla sobre este servicio",
      "Text Name": "RETOQUE ESTÉTICO",
      "Archive Name": "retoque_estetico",
      image: service10,
    },
    {
      id: 11,
      text: "Texto muy corto 11 que habla sobre este servicio",
      "Text Name": "MONTAJE",
      "Archive Name": "montaje",
      image: service11,
    },
    {
      id: 12,
      text: "Texto muy corto 12 que habla sobre este servicio",
      "Text Name": "EDICIÓN AUDIOVISUAL",
      "Archive Name": "edicion_audiovisual",
      image: service12,
    },
    {
      id: 13,
      text: "Texto muy corto 13 que habla sobre este servicio",
      "Text Name": "MAKE UP",
      "Archive Name": "make_up",
      image: service13,
    },
    {
      id: 14,
      text: "Texto muy corto 14 que habla sobre este servicio",
      "Text Name": "STYLING",
      "Archive Name": "styling",
      image: service14,
    },
    {
      id: 15,
      text: "Texto muy corto 15 que habla sobre este servicio",
      "Text Name": "PRODUCCIÓN DE MODA",
      "Archive Name": "produccion_de_moda",
      image: service15,
    },
  ]

  /* Color de fondo de la imagen mientras carga en la escala de grises */
  function grey() {
    var v = ((Math.random() * 256) | 200).toString(16)
    return "#" + v + v + v
  }

  return (
    <>
      <div className="services">
        <section className="service-menu">

          {services.map(service => (
            <Link key={service.id} to={`/services/${service["Archive Name"]}`}>{service["Text Name"]}</Link>

          ))}

          
        </section>

        <section className="service-image">
          {services &&
            services.map((service) => {
              return (
                <div key={service.id}>
                  {name == service["Archive Name"] && (
                    <div>
                      {service.text != "" && (
                        <div className="service-text">
                          <p>{service.text}</p>
                        </div>
                      )}

                      <div style={{ backgroundColor: grey() }}>
                        <img src={service.image} alt="slides" />
                      </div>

                      
                    </div>
                  )}
                </div>
              )
            })}
        </section>

        {/* Mosaico estilo Slider */}
        {/* <section className='slider-menu'>
                    <Slider images={images}/>
                </section> */}
      </div>
    </>
  )
}

export default Services
