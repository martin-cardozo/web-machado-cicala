import Slider from "../components/Slider"


function Home() {
  const images = Object.keys(import.meta.glob('/public/homefiles/*.{jpg,jpeg,png,gif,svg}')).map((path) => ({
    id: path,
    image: path,
  }));

  return (
    <>
      <Slider images={images} />
    </>
  )
}

export default Home
