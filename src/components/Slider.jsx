import "./gallery.css"

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

function Slider({ images }) {
  /* Color de fondo de la imagen mientras carga en la escala de grises */
  function grey() {
    var v = ((Math.random() * 256) | 200).toString(16)
    return "#" + v + v + v
  }

  return (
    <div className="gallery overflow">
      <div className="unique-slider">
        {images.map((image) => (
          <div key={image.id} style={{ backgroundColor: grey() }}>
            <img src={image.image} alt="slides" />
          </div>
        ))}
      </div>

      <div className="slide-track-up">
        {chunkArray(images, 4)[0].map((image) => (
          <div key={image.id} style={{ backgroundColor: grey() }}>
            <img src={image.image} alt="slides" />
          </div>
        ))}
        {chunkArray(images, 4)[0].map((image) => (
          <div key={image.id} style={{ backgroundColor: grey() }}>
            <img src={image.image} alt="slides" />
          </div>
        ))}
      </div>
      <div className="slide-track-down">
        {chunkArray(images, 4)[1].map((image) => (
          <div key={image.id} style={{ backgroundColor: grey() }}>
            <img src={image.image} alt="slides" />
          </div>
        ))}
        {chunkArray(images, 4)[1].map((image) => (
          <div key={image.id} style={{ backgroundColor: grey() }}>
            <img src={image.image} alt="slides" />
          </div>
        ))}
      </div>
      <div className="slide-track-up">
        {chunkArray(images, 4)[2].map((image) => (
          <div key={image.id} style={{ backgroundColor: grey() }}>
            <img src={image.image} alt="slides" />
          </div>
        ))}
        {chunkArray(images, 4)[2].map((image) => (
          <div key={image.id} style={{ backgroundColor: grey() }}>
            <img src={image.image} alt="slides" />
          </div>
        ))}
      </div>
      <div className="slide-track-down">
        {chunkArray(images, 4)[3].map((image) => (
          <div key={image.id} style={{ backgroundColor: grey() }}>
            <img src={image.image} alt="slides" />
          </div>
        ))}
        {chunkArray(images, 4)[3].map((image) => (
          <div key={image.id} style={{ backgroundColor: grey() }}>
            <img src={image.image} alt="slides" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slider
