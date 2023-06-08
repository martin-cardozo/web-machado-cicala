import React from 'react'
import './gallery.css'

// Función para dividir el array de imagenes en subarrays
function chunkArray(images, chunkSize){
    const results = []
    let index = 0
    while (index < images.length) {
        results.push(images.slice(index, index + chunkSize))
        index = index + chunkSize
    }
    return results
}



function Slider({images}) {
    
    
    return (


        
            <div className="gallery overflow fixed static">

                <div className="unique-slider">
                    {
                        chunkArray(images, 4)
                        .map((chunk) =>(
                            chunk.map((image) => (
                                <div>
                                    <img key={image.length} src={image} alt="slides" />
                                </div>
                            ))
                        ))
                    }
                </div>

                <div className='slide-track-up'>
                    {
                        chunkArray(images, 4)[0]
                        .map((image) => (
                            <div>
                                <img key={image.length} src={image} alt="slides" />
                            </div>
                        ))
                    }
                    {
                        chunkArray(images, 4)[0]
                        .map((image) => (
                            <div>
                                <img key={image.length} src={image} alt="slides" />
                            </div>
                        ))
                    }
                </div>
                <div className='slide-track-down'>
                    {
                        chunkArray(images, 4)[1]
                        .map((image) => (
                            <div>
                                <img key={image.length} src={image} alt="slides" />
                            </div>
                        ))

                    }
                    {
                        chunkArray(images, 4)[1]
                        .map((image) => (
                            <div>
                                <img key={image.length} src={image} alt="slides" />
                            </div>
                        ))

                    }
                </div>
                <div className='slide-track-up'>
                    {
                        chunkArray(images, 4)[2]
                        .map((image) => (
                            <div>
                                <img key={image.length} src={image} alt="slides" />
                            </div>
                        ))

                    }
                    {
                        chunkArray(images, 4)[2]
                        .map((image) => (
                            <div>
                                <img key={image.length} src={image} alt="slides" />
                            </div>
                        ))

                    }
                </div>
                <div className='slide-track-down'>    
                    {
                        chunkArray(images, 4)[3]
                        .map((image) => (
                            <div>
                                <img key={image.length} src={image} alt="slides" />
                            </div>
                        ))

                    }
                    {
                        chunkArray(images, 4)[3]
                        .map((image) => (
                            <div>
                                <img key={image.length} src={image} alt="slides" />
                            </div>
                        ))

                    }
                </div>
            </div>
            

            

    )
}

export default Slider