import image1 from "/assets/homefiles/home (1).jpg"
import image2 from "/assets/homefiles/home (2).jpg"
import image3 from "/assets/homefiles/home (3).jpg"
import image4 from "/assets/homefiles/home (4).jpg"
import image5 from "/assets/homefiles/home (5).jpg"
import image6 from "/assets/homefiles/home (6).jpg"
import image7 from "/assets/homefiles/home (7).jpg"
import image8 from "/assets/homefiles/home (8).jpg"
import image9 from "/assets/homefiles/home (9).jpg"
import image10 from "/assets/homefiles/home (10).jpg"
import image11 from "/assets/homefiles/home (11).jpg"
import image12 from "/assets/homefiles/home (12).jpg"
import image13 from "/assets/homefiles/home (13).jpg"
import image14 from "/assets/homefiles/home (14).jpg"
import image15 from "/assets/homefiles/home (15).jpg"
import image16 from "/assets/homefiles/home (16).jpg"

import "../components/home.css"

function Home() {
  const images = [
    {
      id: 1,
      image: image1,
    },
    {
      id: 2,
      image: image2,
    },
    {
      id: 3,
      image: image3,
    },
    {
      id: 4,
      image: image4,
    },
    {
      id: 5,
      image: image5,
    },
    {
      id: 6,
      image: image6,
    },
    {
      id: 7,
      image: image7,
    },
    {
      id: 8,
      image: image8,
    },
    {
      id: 9,
      image: image9,
    },
    {
      id: 10,
      image: image10,
    },
    {
      id: 11,
      image: image11,
    },
    {
      id: 12,
      image: image12,
    },
    {
      id: 13,
      image: image13,
    },
    {
      id: 14,
      image: image14,
    },
    {
      id: 15,
      image: image15,
    },
    {
      id: 16,
      image: image16,
    },
  ]

  // Función para dividir el array de imagenes en subarrays
  function chunkArray(images, chunkSize) {
    const results = []
    let index = 0
    while (index < images.length) {
      results.push(images.slice(index, index + chunkSize))
      index = index + chunkSize
    }
    return results
  }

  /* Color de fondo de la imagen mientras carga en la escala de grises */
  function grey() {
    var v = ((Math.random() * 256) | 200).toString(16)
    return "#" + v + v + v
  }

  return (
    <div className="slider-gallery overflow">

      <div className="horizontal-left-scrolling-items">
        <div className="horizontal-scrolling-items__item">
          <img src={image1} alt="slides" style={{ backgroundColor: grey() }} />
        </div>

        <div className="horizontal-scrolling-items__item">
          <img src={image2} alt="slides" style={{ backgroundColor: grey() }} />
        </div>

        <div className="horizontal-scrolling-items__item">
          <img src={image3} alt="slides" style={{ backgroundColor: grey() }} />
        </div>

        <div className="horizontal-scrolling-items__item">
          <img src={image4} alt="slides" style={{ backgroundColor: grey() }} />
        </div>

        <div className="horizontal-scrolling-items__item">
          <img src={image5} alt="slides" style={{ backgroundColor: grey() }} />
        </div>

        <div className="horizontal-scrolling-items__item">
          <img src={image6} alt="slides" style={{ backgroundColor: grey() }} />
        </div>

        <div className="horizontal-scrolling-items__item">
          <img src={image7} alt="slides" style={{ backgroundColor: grey() }} />
        </div>

        <div className="horizontal-scrolling-items__item">
          <img src={image8} alt="slides" style={{ backgroundColor: grey() }} />
        </div>

        <div className="horizontal-scrolling-items__item">
          <img src={image1} alt="slides" style={{ backgroundColor: grey() }} />
        </div>

        <div className="horizontal-scrolling-items__item">
          <img src={image2} alt="slides" style={{ backgroundColor: grey() }} />
        </div>

        <div className="horizontal-scrolling-items__item">
          <img src={image3} alt="slides" style={{ backgroundColor: grey() }} />
        </div>

        <div className="horizontal-scrolling-items__item">
          <img src={image4} alt="slides" style={{ backgroundColor: grey() }} />
        </div>
      </div>

      <div className="horizontal-right-scrolling-items">
        <div className="horizontal-scrolling-items__item">
          <img src={image9} alt="slides" style={{ backgroundColor: grey() }} />
        </div>

        <div className="horizontal-scrolling-items__item">
          <img src={image10} alt="slides" style={{ backgroundColor: grey() }} />
        </div>

        <div className="horizontal-scrolling-items__item">
          <img src={image11} alt="slides" style={{ backgroundColor: grey() }} />
        </div>

        <div className="horizontal-scrolling-items__item">
          <img src={image12} alt="slides" style={{ backgroundColor: grey() }} />
        </div>

        <div className="horizontal-scrolling-items__item">
          <img src={image13} alt="slides" style={{ backgroundColor: grey() }} />
        </div>

        <div className="horizontal-scrolling-items__item">
          <img src={image14} alt="slides" style={{ backgroundColor: grey() }} />
        </div>

        <div className="horizontal-scrolling-items__item">
          <img src={image15} alt="slides" style={{ backgroundColor: grey() }} />
        </div>

        <div className="horizontal-scrolling-items__item">
          <img src={image16} alt="slides" style={{ backgroundColor: grey() }} />
        </div>

        <div className="horizontal-scrolling-items__item">
          <img src={image9} alt="slides" style={{ backgroundColor: grey() }} />
        </div>

        <div className="horizontal-scrolling-items__item">
          <img src={image10} alt="slides" style={{ backgroundColor: grey() }} />
        </div>

        <div className="horizontal-scrolling-items__item">
          <img src={image11} alt="slides" style={{ backgroundColor: grey() }} />
        </div>

        <div className="horizontal-scrolling-items__item">
          <img src={image12} alt="slides" style={{ backgroundColor: grey() }} />
        </div>
      </div>

      <div className="slide-track-up">
        {images &&
          chunkArray(images, 4)[0].map((image) => (
            <div key={image.id} style={{ backgroundColor: grey() }}>
              <img src={image.image} alt="slides" />
            </div>
          ))}
        {images &&
          chunkArray(images, 4)[0].map((image) => (
            <div key={image.id} style={{ backgroundColor: grey() }}>
              <img src={image.image} alt="slides" />
            </div>
          ))}
      </div>
      <div className="slide-track-down">
        {images &&
          chunkArray(images, 4)[1].map((image) => (
            <div key={image.id} style={{ backgroundColor: grey() }}>
              <img src={image.image} alt="slides" />
            </div>
          ))}
        {images &&
          chunkArray(images, 4)[1].map((image) => (
            <div key={image.id} style={{ backgroundColor: grey() }}>
              <img src={image.image} alt="slides" />
            </div>
          ))}
      </div>
      <div className="slide-track-up">
        {images &&
          chunkArray(images, 4)[2].map((image) => (
            <div key={image.id} style={{ backgroundColor: grey() }}>
              <img src={image.image} alt="slides" />
            </div>
          ))}
        {images &&
          chunkArray(images, 4)[2].map((image) => (
            <div key={image.id} style={{ backgroundColor: grey() }}>
              <img src={image.image} alt="slides" />
            </div>
          ))}
      </div>
      <div className="slide-track-down">
        {images &&
          chunkArray(images, 4)[3].map((image) => (
            <div key={image.id} style={{ backgroundColor: grey() }}>
              <img src={image.image} alt="slides" />
            </div>
          ))}
        {images &&
          chunkArray(images, 4)[3].map((image) => (
            <div key={image.id} style={{ backgroundColor: grey() }}>
              <img src={image.image} alt="slides" />
            </div>
          ))}
      </div>
    </div>
  )
}

export default Home
