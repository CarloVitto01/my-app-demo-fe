import axios from "axios";
import SegnalazioneModel from "../models/SegnalazioneModel";


const SEGNALAZIONI_API_BASE_URL = "http://localhost:8080";
const VERSION_URI = SEGNALAZIONI_API_BASE_URL + "/api/v1";
const SEGNALAZIONI_URI = VERSION_URI + "/segnalazioni";
const BASE_ALL = SEGNALAZIONI_URI + "/";

const getSegnalazioni = async () => {
    try {
        return await axios.get(BASE_ALL);
    } catch (error) {
        console.error("Error getting abilities:", error);
        throw error;
    }
};

const createSegnalazioni = async (segnalazione : SegnalazioneModel) => {
    try {
        const response = await axios.post(BASE_ALL, segnalazione);
        return response;
    } catch (error) {
        console.error("Error getting abilities:", error);
        throw error;
    }
};

const deleteSegnalazione = async (segnalazioneid : number) => {
    try {
        const response = await axios.delete(BASE_ALL + segnalazioneid);
        return response;
    } catch (error) {
        console.error("Error getting abilities:", error);
        throw error;
    }
};


const filteredSegnalazione = async (dateSegnalazione : Date) => {
    try {
        const response = await axios.get(BASE_ALL + dateSegnalazione);
        return response;
    } catch (error) {
        console.error("Error getting abilities:", error);
        throw error;
    }
};


const SegnalazioniService = {
    getSegnalazioni,
    createSegnalazioni,
    deleteSegnalazione,
    filteredSegnalazione
};

export default SegnalazioniService;