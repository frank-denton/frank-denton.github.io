import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter-slice";




export const store = configureStore({
    reducer: { 
        counter: counterReducer,
    }
});

export const AppDispatch = store.dispatch;
export const RootState = store.getState;