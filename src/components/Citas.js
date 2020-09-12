import React from 'react';
import PropTypes from 'prop-types';

const Citas = ({cita, deleteCitas}) => (
        <div className="cita">
            <p>Mascota: <span>{cita.mascota}</span></p>
            <p>Dueño: <span>{cita.propietario}</span></p>
            <p>Fecha: <span>{cita.fecha}</span></p>
            <p>Hora: <span>{cita.hora}</span></p>
            <p>Síntoma: <span>{cita.sintomas}</span></p>

            <button
                className="button delete u-full-width"
                onClick={ () => deleteCitas(cita.id) }
            >Eliminar &times;</button>
        </div>
)

Citas.propTypes = {
    cita: PropTypes.object.isRequired,
    deleteCita: PropTypes.func.isRequired
}

export default Citas
