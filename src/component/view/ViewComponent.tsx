import { useEffect, useState } from "react";
import Segnalazioni from "../../models/SegnalazioneModel";
import SegnalazioniService from "../../service/SegnalazioniService";
import "./ViewComponent.css"
import { useForm } from "react-hook-form";

type FilteredSegnalazioni = Segnalazioni & {
  filter: string;
  inputF: string;
};

const ViewComponent = () => {
  const [segnalazioniList, setSegnalazioniList] = useState<Segnalazioni[]>([]);
  const { register, handleSubmit, watch } = useForm<FilteredSegnalazioni>();
  const inputFValue = watch('inputF');

  useEffect(() => {
    SegnalazioniService.getSegnalazioni().then((res) => {
      setSegnalazioniList(res.data);
    });
  }, []);

  const filterReset = () => {
    SegnalazioniService.getSegnalazioni().then((res) => {
      setSegnalazioniList(res.data);
    });
  };

  const deleteLesson = async (id: number) => {
    await SegnalazioniService.deleteSegnalazione(id);
    console.log("Ho eliminato la segnalazione con id : " + id);
    window.location.reload();
  };

  const filterBy = async (data: FilteredSegnalazioni) => {
    const { filter, inputF } = data;
    const filtered = await SegnalazioniService.filteredSegnalazioneBy(filter, inputF);
    console.log("Ho filtrato con le seguenti date: " + inputF);
    setSegnalazioniList(filtered.data);
  };

  return (
    <div>
      <div className="bodySearch">
        <div className="searchContainer">
          <form onSubmit={handleSubmit(filterBy)} className="searchForm">
            <div className="sectionSearch">
              <label htmlFor="filterType">Filter by:</label>
              <select id="filterType" {...register('filter')}>
                <option value="date">Date</option>
                <option value="surname">Surname</option>
              </select>
            </div>
            <div className="sectionSearch">
              <label htmlFor="filterValue">Filter value:</label>
              <input
                id="filterValue"
                type="text"
                className='input-form'
                placeholder='Filter value'
                {...register('inputF')}
              />
            </div>
            <div className="sectionSearch">
              <button type="submit" disabled={!inputFValue} className="buttonFilter">Filter</button>
              <button type="button" onClick={filterReset} className="buttonReset">Reset</button>
            </div>
          </form>
        </div>
      </div>
      <div className={`containerCardSegnalazioni`}>
        {segnalazioniList.map((segnalazioni: Segnalazioni) => (
          <div className={`cardSegnalazioni`} key={segnalazioni.id}>
            <div className="containerSegnalazioni">
              <div className="sectionSegnalazioniDescription">
                <h4>Description: </h4>
                <p>{segnalazioni.description}</p>
                <p>{segnalazioni?.date?.toString()}</p>
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
