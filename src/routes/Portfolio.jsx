import { Link } from 'react-router-dom'
import '../components/portfolio.css'


function Portfolio() {
  return (
    
        <div className="slider">

            <div className='big-slider'>
                <Link to={"1"}>
                    <div className="card bg1">
                        Advertising
                    </div>
                </Link>

                <Link to={"2"}>
                    <div className="card bg2">
                        Beauty
                    </div>
                </Link>
                
                <Link to={"3"}>
                    <div className="card bg3">
                        Celebrities
                    </div>
                </Link>

                <Link to={"4"}>
                    <div className="card bg4">
                        Entertaiment
                    </div>
                </Link>

                <Link to={"5"}>
                    <div className="card bg5">
                        Fashion
                    </div>
                </Link>

                <Link to={"6"}>
                    <div className="card bg6">
                        Hair
                    </div>
                </Link>

                <Link to={"7"}>
                    <div className="card bg7">
                        Lifestyle
                    </div>
                </Link>

                <Link to={"8"}>
                    <div className="card bg4">
                        Films (+ AD Films)
                    </div>
                </Link>

                <Link to={"9"}>
                    <div className="card bg3">
                        Short Films - Music Videos
                    </div>
                </Link>

                <Link to={"10"}>
                    <div className="card bg2">
                        Special Projects
                    </div>
                </Link>

                <Link to={"11"}>
                    <div className="card bg1">
                        Still
                    </div>
                </Link>

                <Link to={"12"}>
                    <div className="card bg7">
                        Kids
                    </div>
                </Link>

                <Link to={"13"}>
                    <div className="card bg6">
                        Animals
                    </div>
                </Link>

                <Link to={"14"}>
                    <div className="card bg5">
                        Cars
                    </div>
                </Link>

            </div>

            
            {/* categorías 1 a 4 */}
            <div className="slide-track-up-categ">
                
                <Link to={"1"}>
                    <div className="card bg1">
                        Advertising
                    </div>
                </Link>

                <Link to={"2"}>
                    <div className="card bg2">
                        Beauty
                    </div>
                </Link>
                
                <Link to={"3"}>
                    <div className="card bg3">
                        Celebrities
                    </div>
                </Link>

                <Link to={"4"}>
                    <div className="card bg4">
                        Entertaiment
                    </div>
                </Link>

                <Link to={"1"}>
                    <div className="card bg1">
                        Advertising
                    </div>
                </Link>

                <Link to={"2"}>
                    <div className="card bg2">
                        Beauty
                    </div>
                </Link>
                
                <Link to={"3"}>
                    <div className="card bg3">
                        Celebrities
                    </div>
                </Link>

                <Link to={"4"}>
                    <div className="card bg4">
                        Entertaiment
                    </div>
                </Link>

            </div>

            {/* categorías 5 a 7 */}
            <div className="slide-track-down-categ">

                <Link to={"5"}>
                    <div className="card bg5">
                        Fashion
                    </div>
                </Link>

                <Link to={"6"}>
                    <div className="card bg6">
                        Hair
                    </div>
                </Link>

                <Link to={"7"}>
                    <div className="card bg7">
                        Lifestyle
                    </div>
                </Link>



                <Link to={"5"}>
                    <div className="card bg5">
                        Fashion
                    </div>
                </Link>

                <Link to={"6"}>
                    <div className="card bg6">
                        Hair
                    </div>
                </Link>

                <Link to={"7"}>
                    <div className="card bg7">
                        Lifestyle
                    </div>
                </Link>


            </div>

            {/* categorías 8 a 11 */}
            <div className="slide-track-up-categ">

                <Link to={"8"}>
                    <div className="card bg4">
                        Films (+ AD Films)
                    </div>
                </Link>

                <Link to={"9"}>
                    <div className="card bg3">
                        Short Films - Music Videos
                    </div>
                </Link>

                <Link to={"10"}>
                    <div className="card bg2">
                        Special Projects
                    </div>
                </Link>

                <Link to={"11"}>
                    <div className="card bg1">
                        Still
                    </div>
                </Link>
                
                
                <Link to={"8"}>
                    <div className="card bg4">
                        Films (+ AD Films)
                    </div>
                </Link>

                <Link to={"9"}>
                    <div className="card bg3">
                        Short Films - Music Videos
                    </div>
                </Link>

                <Link to={"10"}>
                    <div className="card bg2">
                        Special Projects
                    </div>
                </Link>

                <Link to={"11"}>
                    <div className="card bg1">
                        Still
                    </div>
                </Link>
                
            </div>

            {/* categorías 12 a 14 */}
            <div className="slide-track-down-categ">

                <Link to={"12"}>
                    <div className="card bg7">
                        Kids
                    </div>
                </Link>

                <Link to={"13"}>
                    <div className="card bg6">
                        Animals
                    </div>
                </Link>

                <Link to={"14"}>
                    <div className="card bg5">
                        Cars
                    </div>
                </Link>

                <Link to={"12"}>
                    <div className="card bg7">
                        Kids
                    </div>
                </Link>

                <Link to={"13"}>
                    <div className="card bg6">
                        Animals
                    </div>
                </Link>

                <Link to={"14"}>
                    <div className="card bg5">
                        Cars
                    </div>
                </Link>
            </div>
        </div>
    
  )
}

export default Portfolio