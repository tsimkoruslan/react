import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {ICar} from "../../interfaces";
import {IError} from "../../interfaces";
import {carsService} from "../../services";
import {AxiosError} from "axios";

interface IState {
    cars: ICar[],
    errors: IError|null,
    trigger: boolean,
    carForUpdate: ICar|null
}

const initialState: IState = {
    cars: [],
    errors: null,
    carForUpdate: null,
    trigger: false
}

const getAll = createAsyncThunk<ICar[], void> (
    'carSlice/getAll',
    async (_, {rejectWithValue}) => {
    try {
         const {data} = await carsService.getAllCar()
            return data
    }catch (e) {
        const error = e as AxiosError
        return rejectWithValue(error.response?.data)
    }}
)

const slice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {

    },
    extraReducers:builder =>
        builder
            .addCase(
                getAll.fulfilled, (state, action)=>{
                    state.cars = action.payload
                }
            )
})
const {actions, reducer: carReducer} = slice;
const carActions = {
    ...actions,
    getAll
}

export  {
    carActions,
    carReducer
}