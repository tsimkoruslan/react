import React, {useEffect, useState} from 'react';
import {ICar} from "../../Interfaces/car.interface";
import {carService} from "../../services/car.service";
import Car from "../Car/Car";
import CarForm from "../CarForm/CarForm";

const Cars = () => {

    const [cars, setCars] = useState<ICar[]>([]);

    useEffect(()=>{
        carService.getAll().then(value => value.data).then(value => setCars(value))
    },[])

    return (
        <div>
            <CarForm/>
            <br/>
            {
                cars.map(car => <Car car={car} key={car.id}/>)
            }
        </div>
    );
};

export default Cars;