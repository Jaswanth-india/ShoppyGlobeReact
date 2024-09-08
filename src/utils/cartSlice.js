import { createSlice } from "@reduxjs/toolkit";

let cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
        counter:0
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            delete state.items[action.payload];
        },
        increaseCounter:(state,action)=>{
            state.counter+=1;
        }
    }
})

export default cartSlice.reducer;
export const {addItem,removeItem,increaseCounter}=cartSlice.actions;