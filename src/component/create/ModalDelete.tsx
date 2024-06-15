import React, { useState } from 'react';
import OrdineService from '../../service/OrdineService';
import "./ModalDelete.css"

interface iProps {
  deleteId: number;
  onDelete: (id : number) => void;
}

const ModalDelete = (props: iProps) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const {deleteId, onDelete }= props

  const handleDelete = async () => {
    await OrdineService.deleteOrdine(deleteId);
    console.log("Segnalazione eliminata con successo, ID: " + deleteId);
    onDelete(deleteId)
    handleClose();
  };

  return (
    <>
      <button className="buttonDelete" onClick={handleShow}>
        Pagato
      </button>

      {show && (
        <div className="modalDelete">
          <div className="modalContentDelete">
            <div className="headerModalDelete">
              <h2>Conferma eliminazione</h2>
            </div>
            <div className="bodyModalDelete">
              <p className='textModalDelete'>Sei sicuro di voler eliminare questo ordine?</p>
            </div>
            <div className="footerModalDelete">
              <button className="bottoneAnnullaDelete" onClick={handleClose}>
                Annulla
              </button>
              <button className="buttonConfirmDelete" onClick={handleDelete}>
                Elimina
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalDelete;