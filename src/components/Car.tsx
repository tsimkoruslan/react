import React, {FC} from 'react';
import {ICar} from "../interfaces";

interface IProps {
    car:ICar
}

const Car: FC<IProps> = ({car}) => {
    const {id, year, price, brand} = car
    return (
        <div>
            <div>Id - {id}</div>
            <div>Рік - {year}</div>
            <div>Ціна - {price}</div>
            <div>Марка - {brand}</div>
            <hr/>

        </div>
    );
};

export default Car;