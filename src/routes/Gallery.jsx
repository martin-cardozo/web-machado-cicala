import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../components/gallery.css'
import Modal from '../components/Modal';
import GalleryLoader from './GalleryLoader';


function Gallery() {
    const [ selectedImg, setSelectedImg] = useState(null)

    const {category} = useParams()

    const [imageData, setImageData] = useState({});

    const [currentPage, setCurrentPage] = useState(1);
    const [imagesPerPage, setImagesPerPage] = useState(9);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Restablecer la posición de desplazamiento cuando se cambia de categoría
        window.scrollTo(0, 0);

        // Cargar datos de la categoría seleccionada desde tu archivo JSON aquí
        // Se tiene un archivo JSON por cada categoría 

        // Carga de datos utilizando import (ajustar la ruta):
        import(`../assets/portfolio/textos/${category}.json`)
          .then((data) => {
            setImageData(data.default);
          })
          .catch((error) => {
            console.error('Error al cargar los datos:', error);
          });

      }, [category]);
    

    /* Color de fondo de la imagen mientras carga en la escala de grises */
    function grey() {
        var v = (Math.random()*(256)|200).toString(16);
        return "#" + v + v + v;
    }

    // Acotar la cantidad de imágenes poniendo una cantida máxima
    // const imageKeys = Object.keys(imageData).slice(0, 70);

    // Función para cargar más imágenes cuando se desplaza hacia abajo
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight &&
        (currentPage * imagesPerPage) < Object.keys(imageData).length
      ) {
        setLoading(true)
        setCurrentPage(currentPage + 1);
      }
    };

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [currentPage, imageData]);

    useEffect(() => {
      // Simula un retraso de 2 segundos
      const loadingTimer = setTimeout(() => {
        setLoading(false)
      }, 2000)

      return () => clearTimeout(loadingTimer)
    }, [loading])

    // Obtén un conjunto de imágenes para la página actual
    const imagesToShow = Object.keys(imageData).reverse().slice(
      0,
      currentPage * imagesPerPage
    );

    return (
        <div className="gallery">
            {imagesToShow.map((imageName) => {
                const extension = imageData[imageName].extension; // Obtener la extensión desde los datos
                const isVideo = extension === 'mp4'; // Verificar si es un video

                if (isVideo) {
                    return (
                      <div key={imageName} className='image-container' style={{ backgroundColor: grey() }}>
                        
                          <iframe
                            src={imageData[imageName].videoUrl}
                            loading="lazy"
                            width="100%"
                            height="250"
                            allowFullScreen
                          >
                          </iframe>
                          <div>
                            <p>{imageData[imageName].client}</p>
                            {
                              imageData[imageName].campaign
                                ? <p>{imageData[imageName].campaign}</p>
                                : <div>
                                  <p>{imageData[imageName].song}</p>
                                  <p>{imageData[imageName].company}</p>
                                  </div> 
                            }
                            <p>{imageData[imageName].year}</p>
                          </div>
                        
                      </div>
                    );
                } else {
                    return (
                      <div key={imageName} className='image-container' onClick={() => setSelectedImg(`/assets/portfolio/${category}/${imageName}.${extension}`)} >
                        <img style={{ backgroundColor: grey() }}
                          src={`/assets/portfolio/${category}/${imageName}.${extension}`} // Ruta con la extensión correspondiente
                          alt={`Descripción de ${imageName}`}
                          loading="lazy"
                          height="350px"
                          
                        />
                        <div className="centered">
                          {imageData[imageName].text1 && <h2>{imageData[imageName].text1}</h2>}
                          {imageData[imageName].text1 && imageData[imageName].text2 && <hr />} {/* Condición para mostrar la línea divisora */}
                          {imageData[imageName].text2 && <h3>{imageData[imageName].text2}</h3>}
                        </div>
                      </div>
                    );
                }
            })
            }
            {loading && <GalleryLoader />}
            { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }
        </div>
    )
}

export default Gallery