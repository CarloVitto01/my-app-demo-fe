import Cliente from "./ClienteModel";
import Prodotto from "./ProdottoModel";

interface Segnalazione {
    id?: number;
    cliente: Cliente,
    prodotto: Prodotto,
    date: Date
}

export default Segnalazione;