import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: 0,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incremented(state) {
            state++;
        },
    }
})

export const { incremented } = counterSlice.actions;
export default counterSlice.reducer;