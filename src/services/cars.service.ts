import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {IRes} from "../types";
import {ICar} from "../interfaces";

const carsService = {
    getAllCar: (): IRes<ICar[]> => axiosService.get(urls.cars),
    createCar:(car:ICar):IRes<ICar> => axiosService.post(urls.cars, car),
    updateCar:(id:number, car:ICar):IRes<ICar> => axiosService.put(urls.byId(id), car),
    deleteCar:(id:number):IRes<void> => axiosService.delete(urls.byId(id))
}

export {
    carsService
}