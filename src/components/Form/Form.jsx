import React from 'react'
import { useState } from 'react'
import './form.css'

function Form() {

    const [values, setValues] = useState({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setValues({
            ...values,
            [name]:value
        })
    }

    const handleForm = (event) => {
        event.preventDefault();
        console.log(values)
    }

    return (
        <div className='form-container'>
            <form onSubmit={handleForm}>
                <h1>Formulario de contacto</h1>
                <input 
                type='text'
                name='name'
                value={values.name}
                placeholder='Ingrese su nombre'
                onChange={handleInputChange} 
                />
                <input 
                type='text'
                name='lastName'
                value={values.lastName}
                placeholder='Ingrese su apellido'
                onChange={handleInputChange} 
                />
                <input 
                type='email'
                name='email'
                value={values.email}
                placeholder='Ingrese su email'
                onChange={handleInputChange} 
                />
                <input 
                type='text'
                name='phone'
                value={values.phone}
                placeholder='Ingrese su número de telefono'
                onChange={handleInputChange} 
                />
                <input 
                type='textarea'
                name='message'
                value={values.message}
                placeholder='Ingrese su nombre'
                onChange={handleInputChange} 
                />
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}

export default Form