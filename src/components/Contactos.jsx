import React, {useReducer, useEffect, useState} from 'react'
import TablaContactos from './TablaContactos'
import FormularioAdd from './FormularioAdd'
import { ContactosReducer } from '../reducers/ContactosReducer'

const init = () => {
    const contactos = localStorage.getItem('contactos')
    console.log(contactos)
    return contactos ? JSON.parse(contactos) : []
}


const Contactos = () => {

    const [state, dispatch] = useReducer(ContactosReducer, [], init)
    
    useEffect(() => {
      localStorage.setItem('contactos', JSON.stringify(state))
    }, [state])

    const [formView, setFormView] = useState(false)

  return (
    <div className="container mt-3">
        
        <button onClick={() => setFormView(!formView)} className="btn btn-success">
          {!formView ? "+ Agregar Contacto" : "- Cerrar Formulario"}
        </button>
        {
          formView && <FormularioAdd dispatch={dispatch} /> 
        }
       
        <TablaContactos contactos={state} dispatch={dispatch} />
    </div>
  )
}

export default Contactos