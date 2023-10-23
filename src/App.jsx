import { Suspense, lazy, useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import "./index.css"
import Navbar from "./components/Navbar"
import Error from "./routes/Error"
import Loader from "./routes/Loader"

const Home = lazy(() => import("./routes/Home"))
const About = lazy(() => import("./routes/About"))
const Contact = lazy(() => import("./routes/Contact"))
const Services = lazy(() => import("./routes/Services"))
const Gallery = lazy(() => import("./routes/Gallery"))

function App() {
  // const [isLoading, setIsLoading] = useState(true)

  // useEffect(() => {
  //   // Simula un retraso de 2 segundos 
  //   const loadingTimer = setTimeout(() => {
  //     setIsLoading(false)
  //   }, 2000)

  //   return () => clearTimeout(loadingTimer)
  // }, [])


  return (
    <div>
      <Navbar />
      <Suspense fallback={<Loader />}>
        {/* {isLoading ? (
          <Loader /> // Muestra el Loader mientras isLoading es true
        ) : ( */}
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/1" element={<About path={1} />} />
            <Route path="/about/2" element={<About path={2} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/:id" element={<Services />} />
            <Route path="/portfolio/:category" element={<Gallery />} />
            <Route path="*" element={<Error />} />
          </Routes>
        {/* )} */}
      </Suspense>
    </div>
  )
}

export default App
