import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name:'cart',
    initialState:{items:[]},

    reducers:{
        addTocart:(state,action)=>{
            const {id,quantity :initialQuantity}= action.payload
            const existingItem = state.items.find((item)=>item.id ===id)
            if(existingItem){
                existingItem.quantity +=1
            }else{
                state.items.push({...action.payload,quantity :initialQuantity || 1})
            }
        },
        removeFromCart: (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
        },
        increaseQuantity:(state,action)=>{
            const item = state.items.find((item)=>item.id ===action.payload)
            if(item && item.quantity <10){
                item.quantity +=1
            }
        },
        decreaseQuantity:(state,action)=>{
            const item = state.items.find((item)=>item.id ===action.payload)
            if(item && item.quantity >1){
                item.quantity -=1
            }
        }
    }

})
export const {addTocart,removeFromCart,increaseQuantity,decreaseQuantity}=cartSlice.actions
export default cartSlice.reducer