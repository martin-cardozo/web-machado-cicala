import React from 'react'
import './gallery.css'
import image1 from '../assets/images/Arg-Vs-Bra.jpg'
import image2 from '../assets/images/CF093353_final.jpg'
import image3 from '../assets/images/CF133983-avatar_Final.jpg'
import image4 from '../assets/images/CF134035_Final.jpg'
import image5 from '../assets/images/DRACULA-FINAL1.jpg'
import image6 from '../assets/images/J_advertising_aeropuertos_018.jpg'
import image7 from '../assets/images/J_advertising_aeropuertos_019.jpg'
import image8 from '../assets/images/J_advertising_aeropuertos_021.jpg'
import image9 from '../assets/images/J_advertising_aeropuertos_031.jpg'
import image10 from '../assets/images/J_advertising_aeropuertos_032.jpg'
import image11 from '../assets/images/J_advertising_aeropuertos_037.jpg'
import image12 from '../assets/images/Massage.jpg'
import image13 from '../assets/images/Cellphone.jpg'
import image14 from '../assets/images/PSICOSIS-R-FINAL1.jpg'
import image15 from '../assets/images/Security.jpg'
import image16 from '../assets/images/SHINNING-R-FINAL.jpg'

const images = [
    image1, image2, image3, image4,
    image5, image6, image7, image8,
    image9, image10, image11, image12,
    image13, image14, image15, image16,
];

function Gallery() {
  return (
    <div className="slider">

        {/* imagenes 1 a 4 */}
        <div className="slide-track-up">
            <div className="slide">
                <img src={images[0]} alt="slides"/>
            </div>
            <div className="slide">
                <img src={images[1]} alt="slides"/>
            </div>
            <div className="slide">
                <img src={images[2]} alt="slides"/>
            </div>
            <div className="slide">
                <img src={images[3]} alt="slides"/>
            </div>

            <div className="slide">
                <img src={images[0]} alt="slides"/>
            </div>
            <div className="slide">
                <img src={images[1]} alt="slides"/>
            </div>
            <div className="slide">
                <img src={images[2]} alt="slides"/>
            </div>
            <div className="slide">
                <img src={images[3]} alt="slides"/>
            </div>
        </div>

        {/* imagenes 5 a 8 */}
        <div className="slide-track-down">
            <div className="slide">
                <img src={images[4]} alt="slides"/>
            </div>
            <div className="slide">
                <img src={images[5]} alt="slides"/>
            </div>
            <div className="slide">
                <img src={images[6]} alt="slides"/>
            </div>
            <div className="slide">
                <img src={images[7]} alt="slides"/>
            </div>

            <div className="slide">
                <img src={images[4]} alt="slides"/>
            </div>
            <div className="slide">
                <img src={images[5]} alt="slides"/>
            </div>
            <div className="slide">
                <img src={images[6]} alt="slides"/>
            </div>
            <div className="slide">
                <img src={images[7]} alt="slides"/>
            </div>
        </div>

        {/* imagenes 9 a 12 */}
        <div className="slide-track-up">
            <div className="slide">
                <img src={images[8]} alt="slides"/>
            </div>
            <div className="slide">
                <img src={images[9]} alt="slides"/>
            </div>
            <div className="slide">
                <img src={images[10]} alt="slides"/>
            </div>
            <div className="slide">
                <img src={images[11]} alt="slides"/>
            </div>

            <div className="slide">
                <img src={images[8]} alt="slides"/>
            </div>
            <div className="slide">
                <img src={images[9]} alt="slides"/>
            </div>
            <div className="slide">
                <img src={images[10]} alt="slides"/>
            </div>
            <div className="slide">
                <img src={images[11]} alt="slides"/>
            </div>
        </div>

        {/* imagenes 13 a 16 */}
        <div className="slide-track-down">
            <div className="slide">
                <img src={images[12]} alt="slides"/>
            </div>
            <div className="slide">
                <img src={images[13]} alt="slides"/>
            </div>
            <div className="slide">
                <img src={images[14]} alt="slides"/>
            </div>
            <div className="slide">
                <img src={images[15]} alt="slides"/>
            </div>

            <div className="slide">
                <img src={images[12]} alt="slides"/>
            </div>
            <div className="slide">
                <img src={images[13]} alt="slides"/>
            </div>
            <div className="slide">
                <img src={images[14]} alt="slides"/>
            </div>
            <div className="slide">
                <img src={images[15]} alt="slides"/>
            </div>
        </div>
    </div>
  )
}

export default Gallery