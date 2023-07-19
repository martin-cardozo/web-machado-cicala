import { Link, useParams } from "react-router-dom"
import "../components/services.css"
// import Slider from "../components/Slider"
import services from "../../database/services.json"

function Services() {
  const params = useParams()

  //   let images = Object.values(
  //     import.meta.glob("../assets/images/services/*.{png,jpg,jpeg,PNG,JPEG}", {
  //       eager: true,
  //       as: "url",
  //     })
  //   )

  //   switch (params.serviceid) {
  //     case "1":
  //       images = Object.values(
  //         import.meta.glob(
  //           "../assets/images/portfolio/advertising/*.{png,jpg,jpeg,PNG,JPEG}",
  //           { eager: true, as: "url" }
  //         )
  //       )
  //       break
  //     case "2":
  //       images = Object.values(
  //         import.meta.glob(
  //           "../assets/images/portfolio/beauty/*.{png,jpg,jpeg,PNG,JPEG}",
  //           { eager: true, as: "url" }
  //         )
  //       )
  //       break
  //     case "3":
  //       images = Object.values(
  //         import.meta.glob(
  //           "../assets/images/portfolio/celebrities/*.{png,jpg,jpeg,PNG,JPEG}",
  //           { eager: true, as: "url" }
  //         )
  //       )
  //       break
  //     case "4":
  //       images = Object.values(
  //         import.meta.glob(
  //           "../assets/images/portfolio/entertaiment/*.{png,jpg,jpeg,PNG,JPEG}",
  //           { eager: true, as: "url" }
  //         )
  //       )
  //       break
  //     case "5":
  //       images = Object.values(
  //         import.meta.glob(
  //           "../assets/images/portfolio/fashion/*.{png,jpg,jpeg,PNG,JPEG}",
  //           { eager: true, as: "url" }
  //         )
  //       )
  //       break
  //     case "6":
  //       images = Object.values(
  //         import.meta.glob(
  //           "../assets/images/portfolio/hair/*.{png,jpg,jpeg,PNG,JPEG}",
  //           { eager: true, as: "url" }
  //         )
  //       )
  //       break
  //     case "7":
  //       images = Object.values(
  //         import.meta.glob(
  //           "../assets/images/portfolio/lifestyle/*.{png,jpg,jpeg,PNG,JPEG}",
  //           { eager: true, as: "url" }
  //         )
  //       )
  //       break
  //     case "8":
  //       images = Object.values(
  //         import.meta.glob(
  //           "../assets/images/portfolio/films/*.{png,jpg,jpeg,PNG,JPEG}",
  //           { eager: true, as: "url" }
  //         )
  //       )
  //       break
  //     case "9":
  //       images = Object.values(
  //         import.meta.glob(
  //           "../assets/images/portfolio/short_films/*.{png,jpg,jpeg,PNG,JPEG}",
  //           { eager: true, as: "url" }
  //         )
  //       )
  //       break
  //     case "10":
  //       images = Object.values(
  //         import.meta.glob(
  //           "../assets/images/portfolio/music_videos/*.{png,jpg,jpeg,PNG,JPEG}",
  //           { eager: true, as: "url" }
  //         )
  //       )
  //       break
  //     case "11":
  //       images = Object.values(
  //         import.meta.glob(
  //           "../assets/images/portfolio/special_projects/*.{png,jpg,jpeg,PNG,JPEG}",
  //           { eager: true, as: "url" }
  //         )
  //       )
  //       break
  //     case "12":
  //       images = Object.values(
  //         import.meta.glob(
  //           "../assets/images/portfolio/still/*.{png,jpg,jpeg,PNG,JPEG}",
  //           { eager: true, as: "url" }
  //         )
  //       )
  //       break
  //     case "13":
  //       images = Object.values(
  //         import.meta.glob(
  //           "../assets/images/portfolio/kids/*.{png,jpg,jpeg,PNG,JPEG}",
  //           { eager: true, as: "url" }
  //         )
  //       )
  //       break
  //     case "14":
  //       images = Object.values(
  //         import.meta.glob(
  //           "../assets/images/portfolio/animals/*.{png,jpg,jpeg,PNG,JPEG}",
  //           { eager: true, as: "url" }
  //         )
  //       )
  //       break
  //     case "15":
  //       images = Object.values(
  //         import.meta.glob(
  //           "../assets/images/portfolio/cars/*.{png,jpg,jpeg,PNG,JPEG}",
  //           { eager: true, as: "url" }
  //         )
  //       )
  //       break
  //     default:
  //       break
  //   }

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

                      <img
                        src={
                          new URL(
                            `${service["File Path"]}${service["Archive Name"]}${service.Format}`,
                            import.meta.url
                          ).href
                        }
                        alt="service"
                      />
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
