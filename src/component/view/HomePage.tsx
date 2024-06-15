import { useEffect, useState } from "react";
import "./HomePage.css";
import OrdineModel from "../../models/OrdineModel";
import OrdineService from "../../service/OrdineService";
import ModalDelete from "../create/ModalDelete";

const HomePage = () => {
  const [ordineList, setOrdineList] = useState<OrdineModel[]>([]);

  
  const onDelete = (id : number) => {
    setOrdineList(prevList=> prevList.filter(ordine => ordine.id !== id))
  }

  useEffect(() => {
    const getAllOrdini = async () => {
      const filtered = await OrdineService.getAllOrdini();
      setOrdineList(filtered.data);
    };
    getAllOrdini();
  }, []);


  return (
    <div>
      <div className="containerCardSegnalazioni">
        {ordineList.map((ordine: OrdineModel) => (
          <div className="cardSegnalazioni">
            <div className="sectionSegnalazioniDescription">
              <h3>Ordine n°{ordine.id} </h3>
              <p>{ordine.date.toString().substring(0, 16).replace("T", " ")}</p>
            </div>
            <div className="sectionSegnalazioni">
              <h4>Cliente:</h4>
              <p>Nome: {ordine.cliente.name}</p>
              <h4>Prodotto:</h4>
              <p>Nome: {ordine.prodotto.name}</p>
              <p>Prezzo: {ordine.prodotto.prezzo}€</p>
            </div>
            <div>
              <ModalDelete deleteId={ordine.id!} onDelete={onDelete} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
