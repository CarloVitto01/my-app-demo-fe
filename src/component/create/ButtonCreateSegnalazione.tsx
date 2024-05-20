import React, { useState } from 'react';
import './ButtonCreateSegnalazione.css';
import CreateSegnalazioneForm from './CreateSegnalazione';
import { RiStickyNoteAddLine } from "react-icons/ri";

const ButtonCreateSegnalazione = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="modal-container">
            <button onClick={toggleModal} className='buttonModal'>
                <span className='frontModal'>
                    Create <RiStickyNoteAddLine />
                </span>
            </button>
            {isOpen && (
                <div className="modal">
                    <div className="containerModal">
                        <div className='subContainerModal'>
                            <div className='sectionSubContainerModal'></div>
                            <div className='sectionSubContainerModal'><h2>Fill in all fields!</h2></div>
                            <div className='sectionSubContainerModal buttonCloseModal'><button onClick={toggleModal} className='button-close'>Close</button></div>
                        </div>
                        <CreateSegnalazioneForm />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ButtonCreateSegnalazione;
