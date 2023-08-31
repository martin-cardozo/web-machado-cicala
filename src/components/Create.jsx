import { useState } from "react"
import { Link,  useNavigate } from "react-router-dom"
import supabase from "../config/supabaseClient"


function Create() {
    const navigate = useNavigate();

  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [id_category, setCategory] = useState(0)
  const [formError, setFormError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!title || !text || !id_category) {
      setFormError('Please fill in all the fields correctly.')
      return
    }

    const { data, error } = await supabase
      .from('photos')
      .insert([{ title, text, id_category }])

    if (error) {
      console.log(error)
      setFormError('Please fill in all the fields correctly.')
    }
    if (data) {
      console.log(data)
      setFormError(null)
      navigate('/portfolio')
    }
  }

  return (
    <div className="page create">
        <button><Link to={"/admin"}>Volver</Link></button>
      <form className="form-photo" onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input 
          type="text" 
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="text">Text:</label>
        <textarea 
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <label htmlFor="category">Category:</label>
        <input 
          type="number"
          id="category"
          value={id_category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button>Crear Foto</button>

        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  )
}

export default Create