import React from 'react'
import './slider.css'


function Slider({images}) {
  return (
    <div className="slider">

        {/* imagenes 1 a 4 */}
        <div className="slide-track-up" id='slide-track-1'>
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
        <div className="slide-track-down" id='slide-track-2'>
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
        <div className="slide-track-up" id='slide-track-3'>
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
        <div className="slide-track-down" id='slide-track-4'>
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

export default Slider