import { useEffect, useState } from "react";
import Segnalazioni from "../../models/SegnalazioneModel";
import SegnalazioniService from "../../service/SegnalazioniService";
import "./ViewComponent.css"

const ViewComponent = () => {
  const [segnalazioniList, setSegnalazioniList] = useState<Segnalazioni[]>([]);

  useEffect(() => {
    SegnalazioniService.getSegnalazioni().then((res) => {
      setSegnalazioniList(res.data)
      console.log(res.data);
    }); 
  }, []);

  const deleteLesson = async (id : number) => {
    await SegnalazioniService.deleteSegnalazione(id);
    console.log("ho eliminato la segnalazione con id : " + id)
  }

  return (
    <div>
      <div>
        <div className={`containerCardSegnalazioni`}>
          {segnalazioniList.map((segnalazioni: Segnalazioni) => (
            <div className={`cardSegnalazioni`}>
              <div className="containerSegnalazioni">
                <div className="sectionSegnalazioniDescription">
                  <h4>Description: </h4>
                  <p className="">{segnalazioni.description}</p>
                  <p className="">{segnalazioni?.date?.toString()}</p>
                </div>
                <div className="sectionSegnalazioni">
                  <h4>Cliente: </h4>
                  <p>{segnalazioni.cliente.name ? segnalazioni.cliente.name : 'N/A'} {segnalazioni.cliente.surname ? segnalazioni.cliente.surname : 'N/A'}</p>
                  <h4>Tecnico: </h4>
                  <p> {segnalazioni.tecnico.name ? segnalazioni.tecnico.name : 'N/A'} {segnalazioni.tecnico.surname ? segnalazioni.tecnico.surname : 'N/A'}</p>
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
