import axios from "axios";
import ClienteModel from "../models/ClienteModel";

// Usa l'indirizzo IP del PC che esegue il backend
const CLIENTE_API_BASE_URL = "http://192.168.1.135:8080";
const VERSION_URI = CLIENTE_API_BASE_URL + "/api/v1";
const CLIENTE_URI = VERSION_URI + "/cliente";
const CREATE_URI = CLIENTE_URI + "/create-cliente";
const GET_ALL_URI = CLIENTE_URI + "/all";

const getAllClienti = async () => {
    try {
        const response = await axios.get(GET_ALL_URI);
        return response;
    } catch (error) {
        console.error("Errore nel ritorno:", error);
        throw error;
    }
};

const createCliente = async (cliente: ClienteModel) => {
    try {
        const response = await axios.post(CREATE_URI, cliente);
        return response;
    } catch (error) {
        console.error("Errore nella creazione:", error);
        throw error;
    }
};



const ClienteService = {
    getAllClienti,
    createCliente
};

export default ClienteService;
