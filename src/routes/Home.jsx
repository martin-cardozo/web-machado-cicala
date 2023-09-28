import "../components/gallery.css"

function Home() {
  const images = Object.keys(
    import.meta.glob("../../public/assets/homefiles/*.{jpg,jpeg,png,gif,svg}")
  ).map((path) => ({
    id: path,
    image: path,
  }))

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
    <div className="gallery overflow">
      <div className="unique-slider">
        {images &&
          images.map((image) => (
            <div key={image.id} style={{ backgroundColor: grey() }}>
              <img src={image.image} alt="slides" />
            </div>
          ))}
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
