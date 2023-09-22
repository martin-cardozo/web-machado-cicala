import { useParams } from 'react-router-dom';
import { useState } from 'react';
import '../components/gallery.css'
import Modal from '../components/Modal';




function Gallery() {
    

    const [ selectedImg, setSelectedImg] = useState(null)


    const {id} = useParams()
    
    let images = []

    
        switch (id) {
            case "1":
                images = Object.values(import.meta.glob('../assets/portfolio/1-advertising/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
                break;
            case "2":
                images = Object.values(import.meta.glob('../assets/portfolio/2-beauty/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
                break;
            case "3":
                images = Object.values(import.meta.glob('../assets/portfolio/3-celebrities/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
                break;
            case "4":
                images = Object.values(import.meta.glob('../assets/portfolio/4-entertaiment/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
                break;
            case "5":
                images = Object.values(import.meta.glob('../assets/portfolio/5-fashion/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
                break;
            case "6":
                images = Object.values(import.meta.glob('../assets/portfolio/6-hair/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
                break;
            case "7":
                images = Object.values(import.meta.glob('../assets/portfolio/7-lifestyle/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
                break;
            case "8":
                images = Object.values(import.meta.glob('../assets/portfolio/8-kids/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
                break;
            case "9":
                images = Object.values(import.meta.glob('../assets/portfolio/9-animals/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
                break;
            case "10":
                images = Object.values(import.meta.glob('../assets/portfolio/10-cars/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
                break;
            case "11":
                images = Object.values(import.meta.glob('../assets/portfolio/11-films/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
                break;
            case "12":
                images = Object.values(import.meta.glob('../assets/portfolio/12-short_films/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
                break;
            case "13":
                images = Object.values(import.meta.glob('../assets/portfolio/13-music/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
                break;
            case "14":
                images = Object.values(import.meta.glob('../assets/portfolio/14-videos/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
                break;
            case "15":
                images = Object.values(import.meta.glob('../assets/portfolio/15-special_projects/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
                break;
            case "16":
                images = Object.values(import.meta.glob('../assets/portfolio/16-still/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
                break;
            default:
                break;
        
        
    }

    /* Color de fondo de la imagen mientras carga en la escala de grises */
    function grey() {
        var v = (Math.random()*(256)|200).toString(16);
        return "#" + v + v + v;
    }

    return (
        <div className="gallery">
            {
              images.map((image) => (
                <div className='image-container' onClick={() => setSelectedImg(image)} style={{backgroundColor: grey()}}>
                    <img key={image} src={image} alt="" loading="lazy"/>
                    <div className="centered">
                        <h2>Lorem, ipsum.</h2>
                        <hr />
                        <h3>Lorem ipsum dolor sit amet.</h3>
                    </div>
                </div>
              ))
            }
            { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }
        </div>
    )
}

export default Gallery