import {createSlice} from '@reduxjs/toolkit'

const initialState={
    name:"empty",
    age:0,
}

const formSlicer=createSlice({
    name:"form",
    initialState,
    reducers:{
        submit:(state,action)=>{

        }
    }

})
export default formSlicer.reducer
export const {submit} =formSlicer.actions