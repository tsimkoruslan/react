import React, { useReducer} from 'react';
import {useForm} from 'react-hook-form'

const reducer = (state, action) => {
    switch (action.type){
        case 'add':
            return {...state, cat: [...state.cat, action.payload.cat]}
    }
    return {...state}
}

const CatForm = () => {
    const {register, handleSubmit, reset} = useForm()
    const [state, dispatch] = useReducer(reducer, {cat: []})

    const save = ({cat}) => {
        dispatch({type: 'add', payload: {cat}})
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input placeholder={'Cat'} {...register('cat')} />
                <button>Save</button>
            </form>
            <div>
                <div>{state.cat}</div>
            </div>
        </div>
    );
};

export default CatForm;
