import { useEffect, useState } from "react";
import "./HomePage.css";
import { SubmitHandler, useForm } from "react-hook-form";
import SegnalazioneModel from "../../models/SegnalazioneModel";
import SegnalazioniService from "../../service/SegnalazioniService";
import ModalDelete from "../create/ModalDelete";

const HomePage = () => {
  const [segnalazioniList, setSegnalazioniList] = useState<SegnalazioneModel[]>([]);
  const { register, handleSubmit } = useForm<SegnalazioneModel>();

  const filterBy: SubmitHandler<SegnalazioneModel> = async (data) => {
    const filtered = await SegnalazioniService.filteredSegnalazioneBy(data.cliente.cognome, data.data_ora);
    setSegnalazioniList(filtered.data);
  };

  const onDelete = (id : number) => {
    setSegnalazioniList(prevList=> prevList.filter(segnalazione => segnalazione.id_segnalazione !== id))
  }

  useEffect(() => {
    const getAllSegnalazioni = async () => {
      const filtered = await SegnalazioniService.filteredSegnalazioneBy(null, null);
      setSegnalazioniList(filtered.data);
    };
    getAllSegnalazioni();
  }, []);


  return (
    <div>
      <div className="filterContainer">
        <div className="filterSubContainer">
          <form onSubmit={handleSubmit(filterBy)} className="filterForm">
            <div className="filterSection">
              <label htmlFor="dateInput">Date Segnalazione:</label>
              <input id="dateInput" type="date" className="inputFilter" {...register('data_ora')} />
            </div>
            <div className="filterSection">
              <label htmlFor="surnameInput">Cognome Cliente:</label>
              <input id="surnameInput" type="text" className="inputFilter" placeholder="Filter value" maxLength={30} {...register('cliente.cognome')} />
            </div>
            <div className="filterSection">
              <button type="submit" className="filterButton">
                <span className="frontFilter">Filtra</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="containerCardSegnalazioni">
        {segnalazioniList.map((segnalazione: SegnalazioneModel) => (
          <div className="cardSegnalazioni">
            <div className="sectionSegnalazioniDescription">
              <h3>Segnalazione </h3>
              <p>Data creazione: {segnalazione.data_ora.toString().substring(0, 16).replace("T", " ")}</p>
            </div>
            <div className="sectionSegnalazioni">
              <h4>Cliente:</h4>
              <p>Nome: {segnalazione.cliente.nome}</p>
              <p>Cognome: {segnalazione.cliente.cognome}</p>
              <p>Email: {segnalazione.cliente.email}</p>
              <p>Telefono: {segnalazione.cliente.telefono}</p>
              <h4>Tecnico:</h4>
              <p>Nome: {segnalazione.tecnico.nome}</p>
              <p>Cognome: {segnalazione.tecnico.cognome}</p>
              <p>Email: {segnalazione.tecnico.email}</p>
              <p>Telefono: {segnalazione.tecnico.telefono}</p>
              <p>Specializzazione: {segnalazione.tecnico.specializzazione}</p>
              <p>Assunzione: {segnalazione.tecnico.data_assunzione.toString()}</p>
            </div>
            <div>
              <ModalDelete deleteId={segnalazione.id_segnalazione!} onDelete={onDelete} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
