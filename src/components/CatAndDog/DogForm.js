import React, { useReducer} from 'react';
import {useForm} from 'react-hook-form'

const reducer = (state, action) => {
    switch (action.type){
        case 'add':
            return {...state, dog: [...state.dog, action.payload.dog]}
    }
    return {...state}
}

const DogForm = () => {
    const {register, handleSubmit, reset} = useForm()
    const [state, dispatch] = useReducer(reducer, {dog: []})

    const save = ({dog}) => {
        dispatch({type: 'add', payload: {dog}})
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input placeholder={'Dog'} {...register('dog')} />
                <button>Save</button>
            </form>
            <div>
                <div>{state.dog}</div>
            </div>
        </div>
    );
};

export default DogForm;
