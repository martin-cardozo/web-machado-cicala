import { Link } from "react-router-dom"
import "../components/about.css"
import foto1 from "/images/about/jose_gabriel_1.jpg"
import foto2 from "/images/about/jose_gabriel_2.jpg"
import foto3 from "/images/about/jose_gabriel_3.jpg"

import foto4 from "/images/about/gabriel_1.jpg"
import foto5 from "/images/about/gabriel_2.jpg"
import foto6 from "/images/about/gabriel_3.jpg"
import foto7 from "/images/about/gabriel_4.jpg"

import foto8 from "/images/about/jose_1.jpg"
// import foto9 from "../assets/about/jose_2.jpg"
// import foto10 from "../assets/about/jose_3.jpeg"
// import foto11 from "../assets/about/jose_4.jpg"
import foto12 from "/images/about/jose_2.jpg"

import instagramLogo from "../assets/icons/icon-instagram.png"

import gabrielMachadoData from "../assets/about/textos/gabriel_machado.json";
import joseCicalaData from "../assets/about/textos/jose_cicala.json";
import machadoCicalaData from "../assets/about/textos/machado_cicala.json";

function About({ path }) {
  const data = path === 1 ? gabrielMachadoData : path === 2 ? joseCicalaData : machadoCicalaData;

  return (
    <div className="about">
      {path == null && (
        <>
          <section className="section1">
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
              <Link to={data.instagramLink} target="_blank">
                <img rel="icon" src={instagramLogo} alt={data.instagramAltText} />
                <strong>{data.instagramUsername}</strong>
              </Link>
            </div>
          </section>

          <section className="section2">
            <div className="info">
              {data.info.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
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
            <h2>{data.name}</h2>
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
              <Link to={data.instagramLink} target="_blank">
                <img rel="icon" src={instagramLogo} alt={data.instagramAltText} />
                <strong>{data.instagramUsername}</strong>
              </Link>
            </div>
          </section>

          <section className="section2">
            <div className="info info-size">
              {data.info.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </section>
        </>
      )}

      {path == 2 && (
        <>
          <section className="section1">
            <h2>{data.name}</h2>
            <div className="image-grid">
              <img
                className="image-grid-col-8 image-grid-row-2"
                src={foto8}
                alt="foto"
              />
              <img className="image-grid-col-8" src={foto12} alt="foto" />
              {/* <img className="image-grid-col-2" src={foto9} alt="foto" /> */}
              {/* <img className="image-grid-col-2" src={foto10} alt="foto" /> */}
              {/* <img className="image-grid-col-4" src={foto11} alt="foto" /> */}
            </div>
            <div className="grey-instagram">
              <Link to={data.instagramLink} target="_blank">
                <img rel="icon" src={instagramLogo} alt={data.instagramAltText} />
                <strong>{data.instagramUsername}</strong>
              </Link>
            </div>
          </section>

          <section className="section2">
            <div className="info info-size">
              {data.info.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  )
}

export default About
