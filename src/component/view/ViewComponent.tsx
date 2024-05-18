import { useEffect, useState } from "react";
import Segnalazioni from "../../models/SegnalazioneModel";
import SegnalazioniService from "../../service/SegnalazioniService";
import "./ViewComponent.css"
import { useForm } from "react-hook-form";

const ViewComponent = () => {
  const [segnalazioniList, setSegnalazioniList] = useState<Segnalazioni[]>([]);
  const { register, handleSubmit } = useForm<Segnalazioni>();

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

  const filterByDates = async (date: Date) => {
      const filtered = await SegnalazioniService.filteredSegnalazione(date);
      console.log("Ho filtrato con le seguenti date: " + date);
      setSegnalazioniList(filtered.data);
  };

  return (
    <div>
      <div>
        <div>
          <form onSubmit={handleSubmit((data) => filterByDates(data.date))}>
            <div className='sectionForm'>
              <div>
                <label>Date:</label>
              </div>
              <div className='subSectionForm'>
                <input
                  type="date"
                  className='input-form'
                  placeholder='date'
                  {...register('date')}
                />
              </div>
            </div>
            <button type="submit">Filter</button>
            <button onClick={filterReset}>Reset</button>
          </form>
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
    </div>
  );
};

export default ViewComponent;
