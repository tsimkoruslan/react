import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../interfaces";
import {useAppDispatch} from "../hooks";
import {carActions} from "../redux";
import css from './style.module.css'

const CarForm = () => {

    const {register, handleSubmit, reset} = useForm<ICar>()
    const dispatch = useAppDispatch()

    const save: SubmitHandler<ICar> = async (car) => {
        await dispatch(carActions.create({car}))
        reset()
    }
    return (
        <form className={css.header} onSubmit={handleSubmit(save)}>
            <input type={"text"} placeholder={'brand'} {...register('brand')}/>
            <input type={"text"} placeholder={'year'} {...register('year')}/>
            <input type={"text"} placeholder={'price'} {...register('price')}/>
            <button>Save</button>
        </form>
    );
};

export default CarForm;