import React, {FC} from 'react';
import {ICar} from "../interfaces";

interface IProps {
    car:ICar
}

const Car: FC<IProps> = ({car}) => {
    const {id, year, price, brand} = car
    return (
        <div>
            <div>{id}</div>
            <div>{year}</div>
            <div>{price}</div>
            <div>{brand}</div>

        </div>
    );
};

export default Car;