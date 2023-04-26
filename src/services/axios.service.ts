import axios from "axios";

import {baseURL, carsURL} from "../constans/urls";


const axiosService = axios.create({baseURL:baseURL})

const carsAxiosService = axios.create({baseURL:carsURL})

export {
    axiosService,
    carsAxiosService
}
