import { Link, useParams } from "react-router-dom"
import "../components/services.css"
// import Slider from "../components/Slider"
import services from "../../database/services.json"
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
  const params = useParams()

  let images = [
    {
      id: 1,
      image: service1,
    },
    {
      id: 2,
      image: service2,
    },
    {
      id: 3,
      image: service3,
    },
    {
      id: 4,
      image: service4,
    },
    {
      id: 5,
      image: service5,
    },
    {
      id: 6,
      image: service6,
    },
    {
      id: 7,
      image: service7,
    },
    {
      id: 8,
      image: service8,
    },
    {
      id: 9,
      image: service9,
    },
    {
      id: 10,
      image: service10,
    },
    {
      id: 11,
      image: service11,
    },
    {
      id: 12,
      image: service12,
    },
    {
      id: 13,
      image: service13,
    },
    {
      id: 14,
      image: service14,
    },
    {
      id: 15,
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
          <Link to={"/services/1"}>PRODUCCIONES FOTOGRÁFICAS</Link>
          <Link to={"/services/2"}>PRODUCCIONES AUDIOVISUALES</Link>
          <Link to={"/services/3"}>DESARROLLO DE CONCEPTOS CREATIVOS</Link>
          <Link to={"/services/4"}>DIRECCIÓN DE ARTE</Link>
          <Link to={"/services/5"}>VIDEO CLIPS</Link>
          <Link to={"/services/6"}>MEGA PRODUCCIONES</Link>
          <Link to={"/services/7"}>SPECIAL PROJECTS</Link>
          <Link to={"/services/8"}>DISEÑO Y ARMADO DE ESCENOGRAFÍAS</Link>
          <Link to={"/services/9"}>SCOUTING Y REALIZACIÓN DE PROPS</Link>
          <Link to={"/services/10"}>RETOQUE ESTÉTICO</Link>
          <Link to={"/services/11"}>MONTAJE</Link>
          <Link to={"/services/12"}>EDICIÓN AUDIOVISUAL</Link>
          <Link to={"/services/13"}>MAKE UP</Link>
          <Link to={"/services/14"}>STYLING</Link>
          <Link to={"/services/15"}>PRODUCCIÓN DE MODA</Link>
        </section>

        <section className="service-image">
          {services &&
            services.map((service) => {
              return (
                <div key={service.id}>
                  {params.serviceid == service.id && (
                    <div>
                      {service.text != "" && (
                        <div className="service-text">
                          <p>{service.text}</p>
                        </div>
                      )}

                      {images.map((image) => {
                        return (
                          <div
                            key={image.id}
                            style={{ backgroundColor: grey() }}
                          >
                            {service.id == image.id && (
                              <img src={image.image} alt="slides" />
                            )}
                          </div>
                        )
                      })}

                      {/* <img
                        src={
                          new URL(
                            `${service["File Path"]}${service["Archive Name"]}${service.Format}`,
                            import.meta.url
                          ).href
                        }
                        alt="service"
                      /> */}
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
