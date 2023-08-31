import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import "./gallery.css"

function AdminNavbar() {
  return (
    
    <nav className="admin-navbar">
      <h1>Panel de administración de portfolio</h1>
      <Link to="/portfolio">Ver portafolio</Link>
      <Link to="/create">Crear nueva foto</Link>
    </nav>
    
  )
}

export default AdminNavbar