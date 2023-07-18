import { Link } from "react-router-dom"
import "../components/about.css"
import foto1 from "../assets/about/jose_gabriel_1.jpg"
import foto2 from "../assets/about/jose_gabriel_2.jpg"
import foto3 from "../assets/about/jose_gabriel_3.jpg"

import foto4 from "../assets/about/gabriel_1.jpg"
import foto5 from "../assets/about/gabriel_2.jpg"
import foto6 from "../assets/about/gabriel_3.jpg"
import foto7 from "../assets/about/gabriel_4.jpg"

import foto8 from "../assets/about/jose_1.jpg"
import foto9 from "../assets/about/jose_2.jpg"
import foto10 from "../assets/about/jose_3.jpeg"
import foto11 from "../assets/about/jose_4.jpg"
import instagramLogo from "../assets/icons/icon-instagram.png"

function About({ path }) {
  return (
    <div className="about">
      {path == null && (
        <>
          <section className="section1">
            {/* <div>
              <img className="logo" src={logo} alt="logo" />
            </div> */}

            <div className="image-grid">
              <img
                className="image-grid-col-8 image-grid-row-2"
                src={foto1}
                alt="foto"
              />

              <img className="image-grid-col-3" src={foto2} alt="" />
              <img className="image-grid-col-5" src={foto3} alt="" />
            </div>
            <div className="grey-instagram">
              <Link
                to={"https://www.instagram.com/machadocicala/?hl=es"}
                target="_blank"
              >
                <img rel="icon" src={instagramLogo} alt="instagram" />
                <strong>@machadocicala</strong>
              </Link>
            </div>
          </section>

          <section className="section2">
            <div className="info">
              <p>
                <strong>Machado Cicala</strong> es el estudio audiovisual y
                fotográfico que cautiva miradas de marcas nacionales e
                internacionales. Gabriel Machado y José Cicala crean universos
                que se consolidan a través de la lente, firmando un pacto
                invisible con su talento. Ambos tienen estilos diversos entre
                sí, pero los une una irrefutable pasión: la imagen.
              </p>
              <p>
                Con más de veinte años de trayectoria, el team supo
                especializarse en los focos que representan a cada uno de ellos
                para lograr transmitir su visión de la estética y del arte. A la
                hora de trabajar, se transforman en dos transmisores de energía.
              </p>
              <p>
                <strong>Gabriel Machado</strong>, el “preferido” de las
                celebrities, disfruta creando climas para conquistar a las
                figuras a través de sus flashes. El rubro del entretenimiento es
                su fuerte, cree en la belleza escondida de las personas y a
                través de la lente logra captar momentos únicos donde el
                potencial de cada persona queda expuesto sin oponer resistencia.
                Su terapia son el teatro y la televisión.
              </p>
              <p>
                Por otro lado, <strong>José Cicala</strong> se destaca por el
                entusiasmo en su rol de Director de arte. Encuentra en el rubro
                audiovisual y en las mega producciones fotográficas un camino
                para crear historias, épocas y personajes. Su dedicación en la
                preproducción y la obsesión por los detalles siempre culminan en
                un producto perfecto. Su mente está permanentemente predispuesta
                para echarse a volar.
              </p>
              <p>
                Machado Cicala es, entonces, un centro de pasión innegociable,
                donde predominan el amor por el trabajo, la buena energía y la
                imaginación sin límites. Con dos conceptos distintos, pero no
                opuestos, se complementan para crear productos de alta calidad
                rindiéndole culto a su talento.
              </p>
            </div>

            <div className="links">
              <Link to={"/about/1"} className="link1">
                <img src={foto4} alt="foto" />
                <div>
                  <p>Bio</p>
                  <p>
                    <strong>Gabriel Machado</strong>
                  </p>
                </div>
              </Link>

              <Link to={"/about/2"} className="link2">
                <img src={foto8} alt="foto" />
                <div>
                  <p>Bio</p>
                  <p>
                    <strong>José Cicala</strong>
                  </p>
                </div>
              </Link>
            </div>
          </section>
        </>
      )}

      {path == 1 && (
        <>
          <section className="section1">
            <h2>GABRIEL MACHADO</h2>
            <div className="image-grid">
              <img
                className="image-grid-col-8 image-grid-row-2"
                src={foto4}
                alt="foto"
              />
              <img className="image-grid-col-2" src={foto5} alt="foto" />
              <img className="image-grid-col-4" src={foto6} alt="foto" />
              <img className="image-grid-col-2" src={foto7} alt="foto" />
            </div>
            <div className="grey-instagram">
              <Link
                to={"https://www.instagram.com/machadito_arte/?hl=es"}
                target="_blank"
              >
                <img rel="icon" src={instagramLogo} alt="instagram" />
                <strong>@machadito_arte</strong>
              </Link>
            </div>
          </section>

          <section className="section2">
            <div className="info info-size">
              <p>
                Gabriel Machado nació el 20 de agosto de 1966 en el barrio de La
                Tablada, Provincia de Buenos Aires.
              </p>

              <p>
                Desde muy pequeño puso en evidencia sus dotes artísticos y, con
                tan solo cuatro años de edad, demostraba tener una gran
                habilidad que sorprendía hasta a su propia maestra que no creía
                que un niño pudiera realizar esa calidad de dibujos a tan corta
                edad.
              </p>

              <p>
                En 1986 ingresó a la carrera de Publicidad en la Universidad
                Nacional de Lomas de Zamora, donde conoció a José Cicala,
                personaje que, desde ese instante, sería trascendental en su
                vida.
              </p>

              <p>
                En 1993, decidió junto a Cicala alquilar un muy pequeño
                departamento en la zona y, sin experiencia alguna, pero con una
                cámara Zenith soviética que tenía en su haber, lanzar un estudio
                fotográfico.
              </p>

              <p>
                El estudio comenzó a realizar una gran cantidad de books
                fotográficos y algunas de esas fotos llegaron a manos del
                reconocido representante de modelos del momento, Ricardo
                Piñeiro. Ese hito fue el gran salto en su carrera y en pocos
                meses estuvieron bajo su foco las modelos más importantes del
                país.
              </p>

              <p>
                Comenzaba el inicio de una marca en la industria de la
                fotografía argentina.{" "}
              </p>

              <p>
                El alcance de su trabajo y talento ha obtenido un reconocimiento
                internacional. Fue contratado por las grandes marcas y estrellas
                de Hollywood, en su haber cuenta con retratos de figuras como la
                modelo Kate Moss, los actores Al Pacino, John Travolta y Antonio
                Banderas, o la cantante Cher.{" "}
              </p>

              <p>
                Actualmente continúa trabajando incansablemente con las
                principales agencias de publicidad del país y para importantes
                clientes nacionales e internacionales.{" "}
              </p>

              <p>
                Gabriel Machado es uno de los fotógrafos más notables y
                representativos de nuestro país. Su lente se ha convertido en
                una marca registrada, valorada no solo por la industria
                publicitaria sino también por las grandes personalidades de
                nuestra cultura. Así es que en 2023 fue declarado{" "}
                <strong>Personalidad Destacada de la Cultura</strong> por la
                Legislatura de la Ciudad de Buenos Aires.
              </p>

              <p>
                Teatral, enérgico y optimista, Gabriel irradia luz no sólo por
                los flashes sino a través de su carisma. Esa personalidad
                encantadora es transmitida en cada uno de sus trabajos y es por
                eso que resulta ser el elegido por las celebrities.{" "}
              </p>
            </div>
          </section>
        </>
      )}

      {path == 2 && (
        <>
          <section className="section1">
            <h2>JOSÉ CICALA</h2>
            <div className="image-grid">
              <img
                className="image-grid-col-8 image-grid-row-2"
                src={foto8}
                alt="foto"
              />
              <img className="image-grid-col-2" src={foto9} alt="foto" />
              <img className="image-grid-col-2" src={foto10} alt="foto" />
              <img className="image-grid-col-4" src={foto11} alt="foto" />
            </div>
            <div className="grey-instagram">
              <Link
                to={"https://www.instagram.com/josecicala/?hl=es"}
                target="_blank"
              >
                <img rel="icon" src={instagramLogo} alt="instagram" />
                <strong>@josecicala</strong>
              </Link>
            </div>
          </section>

          <section className="section2">
            <div className="info info-size">
              <p>
                José María Cicala nació el 15 de agosto de 1965 en Lanús, ciudad
                de la Provincia de Buenos Aires. Estudió Publicidad en la
                Universidad de Lomas de Zamora, donde conoció a Gabriel Machado,
                su aliado perfecto y con quien comparte la pasión por la
                fotografía.
              </p>

              <p>
                En 1993 decidieron crear su propio estudio, MACHADO CICALA, y
                con el tiempo comenzaron a instaurar su sello dentro del mundo
                artístico, convirtiéndose en los fotógrafos más prestigiosos de
                la Argentina.
              </p>

              <p>
                Después de 20 años dedicándose a la fotografía publicitaria y
                artística, José le dio un giro a su carrera, comenzando a
                dirigir piezas audiovisuales.
              </p>

              <p>
                En los últimos 12 años ha dirigido videoclips de artistas como
                La Beriso, Miss Bolivia, Piti Fernández (Las Pastillas del
                Abuelo), Dak1llah, Gloria Carrá y muchos otros, así también
                numerosas publicidades y cortometrajes, entre los que se destaca
                ‘’Conexión Real’’, corto protagonizado por Guillermo y Nicolás
                Francella.
              </p>

              <p>
                En 2018 nace Shock House junto a su opera prima, un thriller
                titulado Sola, protagonizado por Araceli González y Miguel Ángel
                Solá.
              </p>

              <p>
                Sola se estrenó en 2021 y fue{" "}
                <strong>
                  ganadora en los festivales Berlín International Art Film
                  Festival de Alemania y Montreal Independent Film Festival de
                  Canadá, y Blow Up Arthouse Filmfest de Chicago.
                </strong>{" "}
                También fue selección oficial de los festivales Shock Fest de
                Estados Unidos y Buenos Aires Rojo Sangre de Argentina.
              </p>

              <p>
                José Cicala fusiona la fotografía y la dirección de arte en
                piezas dignas de observar en detalle.
              </p>

              <p>
                El rubro publicitario, las mega-producciones, tanto fotográficas
                como audiovisuales, y los proyectos especiales resultan ser los
                medios indicados para generar contenidos que inspiran. Su
                creatividad combinada con la minuciosa dedicación que le presta
                a todos los procesos pre y post producción, componen imágenes
                que narran historias y crean personajes.
              </p>

              <p>
                Coleccionista de épocas y devoto de objetos retro, busca que el
                espectador deba mirar más de una vez para encontrarle múltiples
                sentidos a sus obras. Ese empuje perfeccionista y su cualidad de
                “niño” fluyen en conjunto hacia ideas sumamente originales.
              </p>
            </div>
          </section>
        </>
      )}
    </div>
  )
}

export default About
