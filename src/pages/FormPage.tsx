import React, {FC} from 'react';
import {useForm} from "react-hook-form";

const FormPage : FC = () => {

    const {register, reset, handleSubmit, formState:{errors, isValid}, setValue} = useForm()

    return (
        <div>
            <form>
                <input/>
                <input/>
                <input/>
            </form>
        </div>
    );
};

export default FormPage;