import {createAsyncThunk, createSlice, isRejectedWithValue} from "@reduxjs/toolkit";

import {ICar} from "../../interfaces";
import {IError} from "../../interfaces";
import {carsService} from "../../services";
import {AxiosError} from "axios";

interface IState {
    cars: ICar[],
    errors: IError,
    trigger: boolean,
    carForUpdate: ICar
}

const initialState: IState = {
    cars: [],
    errors: null,
    carForUpdate: null,
    trigger: false
}

const getAll = createAsyncThunk<ICar[], void>(
    'carSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carsService.getAllCar()
            return data
        } catch (e) {
            const error = e as AxiosError
            return rejectWithValue(error.response.data)
        }
    }
)

const create = createAsyncThunk<void, { car: ICar }>(
    'carSlice/create',
    async ({car}, {rejectWithValue}) => {
        try {
            await carsService.createCar(car)
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const slice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(
                getAll.fulfilled, (state, action) => {
                    state.cars = action.payload
                }
            )
            .addCase(create.fulfilled, state => {
                state.trigger = !state.trigger
            })
            .addMatcher(isRejectedWithValue(), (state, action) => {
                state.errors = action.payload
            })

})
const {actions, reducer: carReducer} = slice;
const carActions = {
    ...actions,
    getAll,
    create
}

export {
    carActions,
    carReducer
}