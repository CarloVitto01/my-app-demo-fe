import React, { useState } from 'react';
import './ButtonCreateCliente.css';
import CreateCliente from './CreateCliente';


const ButtonCreateCliente = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="buttonCreateCliente" onClick={handleShow}>
        Aggiungi Cliente
      </button>

      {show && (
        <div className="modalCreateCliente">
          <div className="modalContentCreateCliente">
            <div className="headerModalCreateCliente">
              <h2>Aggiungi Cliente</h2>
            </div>
              <CreateCliente />
            <div className="footerModalCreateCliente">
              <button className="buttonCloseCreateCliente" onClick={handleClose}>
                Chiudi
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ButtonCreateCliente;