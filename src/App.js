import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import Citas from './components/Citas'

function App() {

  //localStorage
  let appoinments = JSON.parse(localStorage.getItem('citas'));

  if(!appoinments) {
    appoinments = [];
  }

  const [citas, setCitas] = useState(appoinments);

  useEffect(() => {
    let appoinments = JSON.parse(localStorage.getItem('citas'));
    if(appoinments) {
      localStorage.setItem('citas', JSON.stringify(citas));
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas]);

  const createCita = cita => {
    setCitas([
      ...citas,
      cita
    ]);
  };

  //Delete "Citas"

  const deleteCitas = id => {
    const newArray = citas.filter(cita => cita.id !== id);
    setCitas(newArray);
  }

  const title = citas.length === 0
    ? 'No hay citas'
    : 'Administra tus citas'

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form 
              createCita={createCita}
            />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {citas.map(cita => (
              <Citas
              key={cita.id}
              cita={cita}
              deleteCitas={deleteCitas}
            />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
