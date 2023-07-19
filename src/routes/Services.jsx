import { Link, useParams } from "react-router-dom"
import "../components/services.css"
// import Slider from "../components/Slider"
import services from "../../database/services.json"



function Services() {
  const params = useParams()
  
  let images = []

  {services &&
    services.map((service) => {
      images.push(
        {
          "id": service.id,
          "url": new URL(
            `${service["File Path"]}${service["Archive Name"]}${service.Format}`,
            import.meta.url
          ).href
        }
      )
    })}


  console.log(images)


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
                      
                      {
                        images.map((image) => {
                          return(
                            <div key={image.id}>
                              {service.id == image.id && (
                                <img src={image.url} alt="slides" />

                              )}
                            </div>
                          )
                        })
                        
                      }

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
