import React, { useState } from 'react';
import './ButtonCreateSegnalazione.css';
import CreateSegnalazioneForm from './CreateSegnalazione';


const ButtonCreateSegnalazione = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="buttonCreate" onClick={handleShow}>
        Crea
      </button>

      {show && (
        <div className="modalCreate">
          <div className="modalContentCreate">
            <div className="headerModalCreate">
              <h2>Crea segnalazione</h2>
            </div>
              <CreateSegnalazioneForm />
            <div className="footerModalCreate">
              <button className="buttonCloseCreate" onClick={handleClose}>
                Chiudi
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ButtonCreateSegnalazione;