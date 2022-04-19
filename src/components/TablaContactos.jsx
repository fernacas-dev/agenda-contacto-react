import React from 'react'

const TablaContactos = ({contactos = [], dispatch}) => {

  const handleDelete = (id) => {
    const deleteAction = {
        type: "delete",
        payload: id
    }
    dispatch(deleteAction)
  }

  return (
    <table className="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Numero</th>
                <th>Accion</th>
            </tr>
        </thead>
        <tbody>
            {
                contactos.map((contacto) => {

                    const finalId = contacto.id.split("-")[0]

                     return (
                        <tr key={contacto.id}>
                            <th>{finalId}</th>
                            <th>{contacto.nombre}</th>
                            <th>{contacto.numero}</th>
                            <th>
                                <button onClick={() => handleDelete(contacto.id )} className="btn btn-danger">Eliminar</button>
                            </th>
                        </tr>
                     )
                })
            }
        </tbody>
    </table>
  )
}

export default TablaContactos