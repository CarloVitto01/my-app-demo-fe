import React, { useState } from 'react';
import './ButtonCreateSegnalazione.css';
import CreateSegnalazioneForm from './CreateSegnalazione';

const ButtonCreateSegnalazione = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="modal-container">
            <button onClick={toggleModal}>Apri Modale</button>
            {isOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <div className='modal-button'>
                            <button onClick={toggleModal} className='button-close'>Close</button>
                        </div>
                        <div className='subcontainer-header-modal-text'>
                            <h5>Compila tutti i campi per salvare la segnalazione</h5>
                        </div>
                        <CreateSegnalazioneForm />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ButtonCreateSegnalazione;
