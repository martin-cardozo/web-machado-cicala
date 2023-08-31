import './gallery.css'

function PhotoCard({photo}) {
    return (
        <div className="photo-card">
          <h3>{photo.title}</h3>
          <p>{photo.text}</p>
          <p>{photo.id_category}</p>
        </div>
      )
}

export default PhotoCard