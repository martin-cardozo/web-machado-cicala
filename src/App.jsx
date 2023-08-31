import { Route, Routes } from "react-router-dom"
import './index.css'

import Home from './routes/Home.jsx'
import About from './routes/About.jsx'
import Contact from './routes/Contact'
import Services from './routes/Services'
import Navbar from './components/Navbar'
import Error from './routes/Error'
import AdminNavbar from './components/AdminNavbar'
import Gallery from "./routes/Gallery"
// import Gallery2 from './routes/Gallery2'
// import Create from './components/Create'
// import Update from './components/Update'


function App() {
  return (
    <div>
        <Navbar /> 
        <Routes>
            <Route path="/" element={<Home />} errorElement={<Error />} />
            <Route path="/about" element={<About />} errorElement={<Error />} />
            <Route path="/about/1" element={<About path={1} />} errorElement={<Error />} />
            <Route path="/about/2" element={<About path={2} />} errorElement={<Error />} />
            <Route path="/contact" element={<Contact />} errorElement={<Error />} />
            <Route path="/services/:name" element={<Services />} errorElement={<Error />} />
            <Route path="/admin" element={<AdminNavbar />} errorElement={<Error />} />
            <Route path="/portfolio/:id" element={<Gallery />} errorElement={<Error />} />
        </Routes>
    </div>
  )
}

export default App


