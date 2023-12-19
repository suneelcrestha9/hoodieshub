import {createSlice} from '@reduxjs/toolkit'

 export const STATUSES= Object.freeze({
    IDLE:'idle',
    ERROR:'error',
    LOADING:'loading'
})

const productSlice = createSlice({
    name:'products',
    initialState:{
        data:[],
        status:STATUSES.IDLE,
    },

    reducers:{
        setProducts:(state,action)=>{
            state.data = action.payload;
        },
        setStatus:(state,action)=>{
            state.status =action.payload
        },
        increaseItem:(state,action)=>{
            const item = state.data.find((item)=>item.id ===action.payload)
            if(item && item.quantity <10){
                item.quantity +=1
            }
        },
        decreaseItem:(state,action)=>{
            const item = state.data.find((item)=>item.id ===action.payload)
            if(item && item.quantity >1){
                item.quantity -=1
            }
        }
    }
})
export const {setProducts,setStatus ,increaseItem,decreaseItem} = productSlice.actions
export default productSlice.reducer

//creating middlware thunk

export function fetchProducts() {
  return async function fetchProductsThunk(dispatch, getState) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const res = await fetch('//suneelcrestha9.github.io/api/products.json');
      const data = await res.json();
      console.log(data); // This logs the fetched data to the console
      dispatch(setProducts(data));
      dispatch(setStatus(STATUSES.IDLE));
    } catch (err) {
      console.log(err);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
