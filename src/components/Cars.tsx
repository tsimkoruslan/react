import React, {FC} from 'react';
import {ICar} from "../interfaces/car.interface";
import Car from "./Car";

interface IProps {
    cars:ICar[]

}
const Cars :FC<IProps>= ({cars}) => {
    return (
        <div>
            {
                cars.map(car => <Car key={car.id} car={car}/>)
            }
        </div>
    );
};

export default Cars;