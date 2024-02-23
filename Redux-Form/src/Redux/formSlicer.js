import {createSlice} from '@reduxjs/toolkit'

const initialState={
    name:"",
    age:0,
}

const formSlicer=createSlice({
    name:"forme",
    initialState,
    reducers:{
        submit:(state,action)=>{
            state.name=action.payload.username
            state.age=action.payload.userage
        }
    }

})
export default formSlicer.reducer
export const {submit} =formSlicer.actions