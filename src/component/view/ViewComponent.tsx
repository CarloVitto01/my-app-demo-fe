import React, { useEffect, useState } from "react";
import Segnalazioni from "../../models/SegnalazioneModel";
import SegnalazioniService from "../../service/SegnalazioniService";
import "./ViewComponent.css";
import { useForm } from "react-hook-form";

type FilteredSegnalazioni = Segnalazioni & {
  surnameInput?: string;
  dateInput?: Date;
};

const ViewComponent = () => {
  const [segnalazioniList, setSegnalazioniList] = useState<Segnalazioni[]>([]);
  const { register, handleSubmit } = useForm<FilteredSegnalazioni>();

  const deleteLesson = async (id: number) => {
    await SegnalazioniService.deleteSegnalazione(id);
    console.log("Ho eliminato la segnalazione con id : " + id);
    window.location.reload();
  };

  const filterBy = async (data: FilteredSegnalazioni) => {
    const { surnameInput, dateInput } = data;
    const filtered = await SegnalazioniService.filteredSegnalazioneBy(surnameInput!, dateInput!);
    console.log(filtered.data);
    setSegnalazioniList(filtered.data);
  };

  return (
    <div>
      <div className="bodySearch">
        <div className="searchContainer">
          <form onSubmit={handleSubmit(filterBy)} className="searchForm">
            <div className="sectionSearch">
              <label htmlFor="dateInput">Date filter:</label>
              <input
                id="dateInput"
                type="date"
                className="input-form"
                {...register('dateInput')}
              />
            </div>
            <div className="sectionSearch">
              <label htmlFor="surnameInput">Surname filter:</label>
              <input
                id="surnameInput"
                type="text"
                className="input-form"
                placeholder="Filter value"
                {...register('surnameInput')}
              />
            </div>
            <div className="sectionSearch">
              <button type="submit" className="buttonFilter">
                <span className="frontFilter">Filter</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="containerCardSegnalazioni">
        {segnalazioniList.map((segnalazioni: Segnalazioni) => (
          <div className="cardSegnalazioni" key={segnalazioni.id}>
            <div className="containerSegnalazioni">
              <div className="sectionSegnalazioniDescription">
                <h4>Description: </h4>
                <p>{segnalazioni.description}</p>
                <p>{segnalazioni.date.toString()}</p>
              </div>
              <div className="sectionSegnalazioni">
                <h4>Cliente: </h4>
                <p>{segnalazioni.cliente.name} {segnalazioni.cliente.surname}</p>
                <h4>Tecnico: </h4>
                <p>{segnalazioni.tecnico.name} {segnalazioni.tecnico.surname}</p>
              </div>
              <div>
                <button onClick={() => deleteLesson(segnalazioni?.id!)}>delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewComponent;
