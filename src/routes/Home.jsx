import Navbar from "../components/Navbar"
import Gallery from "../components/Gallery"

// import image1 from '../assets/images/home/Arg-Vs-Bra.jpg'


const images = Object.values(import.meta.glob('../assets/images/home/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))

function Home() {
  
  return (
    <>
      <Navbar />
      <Gallery images={images}/>
    </>
  )
}

export default Home
