import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../interfaces/car.interface";
import carValidators from "../validators/car.validator";
import {joiResolver} from "@hookform/resolvers/joi";
import carService from "../services/car.service";
import {ISetState} from "../types/setState.type";

interface IProps{
    setOnChange:ISetState<boolean>
}

const CarForm: FC<IProps> = ({setOnChange}) => {

    const {register, reset, handleSubmit, formState: {errors, isValid}, setValue} = useForm<ICar>({
        mode: 'all',
        resolver: joiResolver(carValidators)
    })

    const submit:SubmitHandler<ICar> = async (car)=>{
        await carService.createCar(car);
        setOnChange(prevState => !prevState)
        reset()
    }
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(submit)}>
                    <input type="text" placeholder={'brand'} {...register('brand')}/>
                    <input type="text" placeholder={'price'} {...register('price')}/>
                    <input type="text" placeholder={'year'} {...register('year')}/>
                    <button disabled={!isValid} >save</button>
                </form>
            </div>
            <div>
                {errors.brand && <div>{errors.brand.message}</div>}
                {errors.price && <div>{errors.price.message}</div>}
                {errors.year && <div>{errors.year.message}</div>}
            </div>
        </div>
    );
};

export default CarForm;