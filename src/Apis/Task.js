import axiosService from "../Commons/AixosService";
import {API_ENDPOINT} from "../Constants";

const url = "task";

export const getAll = () => {
    return axiosService.get(`${API_ENDPOINT}/${url}`);
};