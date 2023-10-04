import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../components/gallery.css'
import Modal from '../components/Modal';


function Gallery() {
    const [ selectedImg, setSelectedImg] = useState(null)

    const {category} = useParams()

    const [imageData, setImageData] = useState({});

    useEffect(() => {
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
    const imageKeys = Object.keys(imageData).slice(0, 70);

    return (
        <div className="gallery">
            {
            imageKeys.map((imageName) => {
                const extension = imageData[imageName].extension; // Obtener la extensión desde los datos
                const isVideo = extension === 'mp4'; // Verificar si es un video

                if (isVideo) {
                    return (
                      <div key={imageName} className='image-container' style={{ backgroundColor: grey() }}>
                        
                          <iframe
                            src={imageData[imageName].videoUrl}
                            width="100%"
                            height="250"
                            allowFullScreen
                            loading="lazy"
                          >
                          </iframe>
                          <div>
                            <p>{imageData[imageName].client}</p>
                            {
                              imageData[imageName].campaign
                                ? <p>{imageData[imageName].campaign}</p>
                                : <p>{imageData[imageName].song}</p>
                            }
                            <p>{imageData[imageName].year}</p>
                          </div>
                        
                      </div>
                    );
                } else {
                    return (
                      <div key={imageName} className='image-container' onClick={() => setSelectedImg(`/images/portfolio/${category}/${imageName}.${extension}`)} style={{ backgroundColor: grey() }}>
                        <img
                          src={`/images/portfolio/${category}/${imageName}.${extension}`} // Ruta con la extensión correspondiente
                          alt={`Descripción de ${imageName}`}
                          loading="lazy"
                          height={500}
                          width={400}
                        />
                        <div className="centered">
                          <h2>{imageData[imageName].text1}</h2>
                          <hr />
                          <h3>{imageData[imageName].text2}</h3>
                        </div>
                      </div>
                    );
                }
            })
            }
            { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }
        </div>
    )
}

export default Gallery