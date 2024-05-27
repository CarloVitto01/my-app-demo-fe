import Cliente from "./ClienteModel";
import Tecnico from "./TecnicoModel";

interface Segnalazione {
    id_segnalazione?: number;
    cliente: Cliente,
    tecnico: Tecnico,
    data_ora: Date
}

export default Segnalazione;