import axios from "axios";
import OrdineModel from "../models/OrdineModel";

// Usa l'indirizzo IP del PC che esegue il backend
const SEGNALAZIONI_API_BASE_URL = "http://192.168.1.135:8080";
const VERSION_URI = SEGNALAZIONI_API_BASE_URL + "/api/v1";
const SEGNALAZIONI_URI = VERSION_URI + "/acquisto";
const CREATE_URI = SEGNALAZIONI_URI + "/create-acquisto";
const DELETE_URI = SEGNALAZIONI_URI + "/delete-acquisto/";
const GET_ALL_URI = SEGNALAZIONI_URI + "/all";

const getAllOrdini = async () => {
    try {
        const response = await axios.get(GET_ALL_URI);
        return response;
    } catch (error) {
        console.error("Errore nel ritorno:", error);
        throw error;
    }
};

const createOrdine = async (ordine: OrdineModel) => {
    try {
        const response = await axios.post(CREATE_URI, ordine);
        return response;
    } catch (error) {
        console.error("Errore nella creazione:", error);
        throw error;
    }
};

const deleteOrdine = async (ordineId: number) => {
    try {
        const response = await axios.delete(DELETE_URI + ordineId);
        return response;
    } catch (error) {
        console.error("Errore nella eliminazione:", error);
        throw error;
    }
};

const SegnalazioniService = {
    getAllOrdini,
    createOrdine,
    deleteOrdine,
};

export default SegnalazioniService;
