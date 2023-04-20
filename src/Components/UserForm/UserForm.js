import React from 'react';
import {useForm} from "react-hook-form";
import {usersService} from "../../services/usersService";

const UserForm = () => {

    const {register, handleSubmit, reset, formState:{errors, isValid}, setValue }= useForm();

    const save = async (user) => {
        await usersService.postUser(user)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(save)} >
            <input type='text' placeholder={'name'} {...register('name')}/>
            <input type='text' placeholder={'username'} {...register('username')} />
            <input type='text' placeholder={'email'} {...register('email')} />
            <button disabled={!isValid}>Save</button>
        </form>
    );
};

export default UserForm;