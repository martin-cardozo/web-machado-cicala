import Slider from "../components/Slider"

import image1 from "../assets/home/Arg-Vs-Bra.jpg"
import image2 from "../assets/home/Cellphone.jpg"
import image3 from "../assets/home/CF093353_final.jpg"
import image4 from "../assets/home/CF133983-avatar_Final.jpg"
import image5 from "../assets/home/CF134035_Final.jpg"
import image6 from "../assets/home/DRACULA-FINAL1.jpg"
import image7 from "../assets/home/J_advertising_aeropuertos_018.jpg"
import image8 from "../assets/home/J_advertising_aeropuertos_019.jpg"
import image9 from "../assets/home/J_advertising_aeropuertos_021.jpg"
import image10 from "../assets/home/J_advertising_aeropuertos_031.jpg"
import image11 from "../assets/home/J_advertising_aeropuertos_032.jpg"
import image12 from "../assets/home/J_advertising_aeropuertos_037.jpg"
import image13 from "../assets/home/Massage.jpg"
import image14 from "../assets/home/PSICOSIS-R-FINAL1.jpg"
import image15 from "../assets/home/Security.jpg"
import image16 from "../assets/home/SHINNING-R-FINAL.jpg"

function Home() {
  const images = [
    {
      id: 1,
      image: image1,
    },
    {
      id: 2,
      image: image2,
    },
    {
      id: 3,
      image: image3,
    },
    {
      id: 4,
      image: image4,
    },
    {
      id: 5,
      image: image5,
    },
    {
      id: 6,
      image: image6,
    },
    {
      id: 7,
      image: image7,
    },
    {
      id: 8,
      image: image8,
    },
    {
      id: 9,
      image: image9,
    },
    {
      id: 10,
      image: image10,
    },
    {
      id: 11,
      image: image11,
    },
    {
      id: 12,
      image: image12,
    },
    {
      id: 13,
      image: image13,
    },
    {
      id: 14,
      image: image14,
    },
    {
      id: 15,
      image: image15,
    },
    {
      id: 16,
      image: image16,
    },
  ]

  return (
    <>
      <Slider images={images} />
    </>
  )
}

export default Home
