import { useParams } from 'react-router-dom';
import { useState } from 'react';
import './gallery.css'
import Modal from './Modal';



function Gallery({category}) {
    const [ selectedImg, setSelectedImg] = useState(null)


    const params = useParams();
    
    let images = []

    if (category=="portfolio") {
        switch (params.portfolioid) {
            case "1":
                images = Object.values(import.meta.glob('../assets/images/portfolio/advertising/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
                break;
            case "2":
                images = Object.values(import.meta.glob('../assets/images/portfolio/beauty/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
                break;
            case "3":
                images = Object.values(import.meta.glob('../assets/images/portfolio/celebrities/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
                break;
            case "4":
                images = Object.values(import.meta.glob('../assets/images/portfolio/entertaiment/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
                break;
            case "5":
                images = Object.values(import.meta.glob('../assets/images/portfolio/fashion/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
                break;
            case "6":
                images = Object.values(import.meta.glob('../assets/images/portfolio/hair/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
                break;
            case "7":
                images = Object.values(import.meta.glob('../assets/images/portfolio/lifestyle/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
                break;
            case "8":
                images = Object.values(import.meta.glob('../assets/images/portfolio/films/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
                break;
            case "9":
                images = Object.values(import.meta.glob('../assets/images/portfolio/short_films/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
                break;
            case "10":
                images = Object.values(import.meta.glob('../assets/images/portfolio/music_videos/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
                break;
            case "11":
                images = Object.values(import.meta.glob('../assets/images/portfolio/special_projects/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
                break;
            case "12":
                images = Object.values(import.meta.glob('../assets/images/portfolio/still/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
                break;
            case "13":
                images = Object.values(import.meta.glob('../assets/images/portfolio/kids/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
                break;
            case "14":
                images = Object.values(import.meta.glob('../assets/images/portfolio/animals/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
                break;
            case "15":
                images = Object.values(import.meta.glob('../assets/images/portfolio/cars/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
                break;
            default:
                break;
        }
        
    }else if (category=="service") {
        switch (params.serviceid) {
            case "1":
                images = Object.values(import.meta.glob('../assets/images/portfolio/advertising/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
                break;
            case "2":
                images = Object.values(import.meta.glob('../assets/images/portfolio/beauty/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
                break;
            case "3":
                images = Object.values(import.meta.glob('../assets/images/portfolio/celebrities/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
                break;
            case "4":
                images = Object.values(import.meta.glob('../assets/images/portfolio/entertaiment/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
                break;
            case "5":
                images = Object.values(import.meta.glob('../assets/images/portfolio/fashion/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
                break;
            case "6":
                images = Object.values(import.meta.glob('../assets/images/portfolio/hair/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
                break;
            case "7":
                images = Object.values(import.meta.glob('../assets/images/portfolio/lifestyle/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
                break;
            case "8":
                images = Object.values(import.meta.glob('../assets/images/portfolio/films/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
                break;
            case "9":
                images = Object.values(import.meta.glob('../assets/images/portfolio/short_films/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
                break;
            case "10":
                images = Object.values(import.meta.glob('../assets/images/portfolio/music_videos/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
                break;
            case "11":
                images = Object.values(import.meta.glob('../assets/images/portfolio/special_projects/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
                break;
            case "12":
                images = Object.values(import.meta.glob('../assets/images/portfolio/still/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
                break;
            case "13":
                images = Object.values(import.meta.glob('../assets/images/portfolio/kids/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
                break;
            case "14":
                images = Object.values(import.meta.glob('../assets/images/portfolio/animals/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
                break;
            case "15":
                images = Object.values(import.meta.glob('../assets/images/portfolio/cars/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))
                break;
            default:
                break;
        }
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
                    <img key={image} src={image} alt="" />
                    <div class="centered">
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