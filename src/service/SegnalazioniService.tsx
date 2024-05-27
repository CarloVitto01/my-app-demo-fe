import axios from "axios";
import SegnalazioneModel from "../models/SegnalazioneModel";

const SEGNALAZIONI_API_BASE_URL = "http://localhost:8080";
const VERSION_URI = SEGNALAZIONI_API_BASE_URL + "/api/v1";
const SEGNALAZIONI_URI = VERSION_URI + "/segnalazione";
const CREATE_URI = SEGNALAZIONI_URI + "/";
const DELETE_URI = SEGNALAZIONI_URI + "/";
const FILTER_URI = SEGNALAZIONI_URI + "/";

const createSegnalazioni = async (segnalazione: SegnalazioneModel) => {
    try {
        const response = await axios.post(CREATE_URI, segnalazione);
        return response;
    } catch (error) {
        console.error("Errore nella creazione della segnalazione:", error);
        throw error;
    }
};

const deleteSegnalazione = async (segnalazioneid: number) => {
    try {
        const response = await axios.delete(DELETE_URI + segnalazioneid);
        return response;
    } catch (error) {
        console.error("Errore nella eliminazione della segnalazione:", error);
        throw error;
    }
};

const filteredSegnalazioneBy = async (cognomeInput: string | null, dataInput: Date | null) => {
    try {
        const response = await axios.get(FILTER_URI,
            {
                params:
                {
                    cognome: cognomeInput ? cognomeInput: null,
                    data: dataInput ? dataInput : null
                }
            }
        );
        return response;
    } catch (error) {
        console.error("Errore nel filtraggio della lista:", error);
        throw error;
    }
};
const SegnalazioniService = {
    createSegnalazioni,
    deleteSegnalazione,
    filteredSegnalazioneBy
};

export default SegnalazioniService;