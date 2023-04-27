import {carsAxiosService} from "./axios.service";
import {urls} from "../constans/urls";
import {IRes} from "../types/axiosRes.type";
import {ICar} from "../interfaces/car.interface";

const carService = {
    getAll: (): IRes<ICar[]> => carsAxiosService.get(urls.cars),
    createCar: (car: ICar): IRes<ICar> => carsAxiosService.post(urls.cars, car),
    updateById: (id: number, car: ICar): IRes<ICar> => carsAxiosService.put(`${urls.cars}${id}`, car),
    deleteCar: (id:number):IRes<void> => carsAxiosService.delete(`${urls.cars}${id}`)
}

export default carService