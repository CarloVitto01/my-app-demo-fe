import React, { useState } from 'react';
import './ButtonCreateOrdine.css';
import CreateOrdine from './CreateOrdine';


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
              <h2>Crea Ordine</h2>
            </div>
              <CreateOrdine />
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