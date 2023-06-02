import Navbar from '../components/Navbar'
import '../components/portfolio.css'


function Portfolio() {
  return (
    <>
        <Navbar />

        <div className="slider">

            {/* categorías 1 a 4 */}
            <div className="slide-track-up-categ">
                <div className="card bg1">
                    <a href="">Advertising</a>
                </div>
                <div className="card bg2">
                    <a href="">Beauty</a>
                </div>
                <div className="card bg3">
                    <a href="">Celebrities</a>
                </div>
                <div className="card bg4">
                    <a href="">Entertaiment</a>
                </div>

                <div className="card bg1">
                    <a href="">Advertising</a>
                </div>
                <div className="card bg2">
                    <a href="">Beauty</a>
                </div>
                <div className="card bg3">
                    <a href="">Celebrities</a>
                </div>
                <div className="card bg4">
                    <a href="">Entertaiment</a>
                </div>
            </div>

            {/* categorías 5 a 7 */}
            <div className="slide-track-down-categ">
                <div className="card bg5">
                    <a href="">Fashion</a>
                </div>
                <div className="card bg6">
                    <a href="">Hair</a>
                </div>
                <div className="card bg7">
                    <a href="">Lifestyle</a>
                </div>

                <div className="card bg5">
                    <a href="">Fashion</a>
                </div>
                <div className="card bg6">
                    <a href="">Hair</a>
                </div>
                <div className="card bg7">
                    <a href="">Lifestyle</a>
                </div>
            </div>

            {/* categorías 8 a 11 */}
            <div className="slide-track-up-categ">
                <div className="card bg4">
                    <a href="">Films (+ AD Films)</a>
                </div>
                <div className="card bg3">
                    <a href="">Short Films - Music Videos</a>
                </div>
                <div className="card bg2">
                    <a href="">Special Projects</a>
                </div>
                <div className="card bg1">
                    <a href="">Still</a>
                </div>

                <div className="card bg4">
                    <a href="">Films (+ AD Films)</a>
                </div>
                <div className="card bg3">
                    <a href="">Short Films - Music Videos</a>
                </div>
                <div className="card bg2">
                    <a href="">Special Projects</a>
                </div>
                <div className="card bg1">
                    <a href="">Still</a>
                </div>
            </div>

            {/* categorías 12 a 14 */}
            <div className="slide-track-down-categ">
                <div className="card bg7">
                    <a href="">Kids</a>
                </div>
                <div className="card bg6">
                    <a href="">Animals</a>
                </div>
                <div className="card bg5">
                    <a href="">Cars</a>
                </div>
                

                <div className="card bg7">
                    <a href="">Kids</a>
                </div>
                <div className="card bg6">
                    <a href="">Animals</a>
                </div>
                <div className="card bg5">
                    <a href="">Cars</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Portfolio