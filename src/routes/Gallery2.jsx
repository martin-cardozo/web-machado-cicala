import supabase from "../config/supabaseClient"
import { useEffect, useState } from "react"
import PhotoCard from "../components/PhotoCard"
import { Link } from "react-router-dom"
import '../components/gallery.css'
// import { useParams } from "react-router-dom"

function Gallery2() {
    // const params = useParams()

  const [fetchError, setFetchError] = useState(null)
  const [photos, setPhotos] = useState(null)

  useEffect(() => {
    const fetchPhotos = async () => {
      const { data, error } = await supabase.from("photos").select()

      if (error) {
        setFetchError("Could not fetch the table")
        setPhotos(null)
      }
      if (data) {
        setPhotos(data)
        setFetchError(null)
      }
    }

    fetchPhotos()
  }, [])

  return (
    <div className="page home">
        {fetchError && (<p>{fetchError}</p>)}
        {photos && (
            <div className="photos">
                <button><Link to={"/admin"}>Volver</Link></button>
                {/* order-by buttons */}
                <div className="photo-grid">
                    {photos.map(photo => (
                    <PhotoCard key={photo.id} photo={photo} />
                    ))}
                </div>
            </div>
        )}
    </div>
    )
}

export default Gallery2
