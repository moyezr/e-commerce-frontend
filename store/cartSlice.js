import { createSlice } from "@reduxjs/toolkit";
import { fetchFromLocalStorage, storeToLocalStorage } from "../utils/helper";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: fetchFromLocalStorage() || []
    },
    reducers: {
        addToCart: (state, action) => {
            const item = state.cartItems.find(p => p.id === action.payload.id);

            if(item) {
                item.quantity++;
                item.attributes.price = item.oneQuantityPrice * item.quantity;
                
            } else {
                state.cartItems.push({...action.payload, quantity: 1})
            }

            storeToLocalStorage(JSON.stringify(state.cartItems));
        },
        updateCart: (state, action) => {
           state.cartItems =  state.cartItems.map((p) => {
                if(p.id === action.payload.id) {

                    if(action.payload.key === 'quantity') {
                        p.attributes.price = p.oneQuantityPrice * action.payload.val;
                    }

                    return {...p, [action.payload.key]: action.payload.val};
                }
                return p;
            })

            storeToLocalStorage(JSON.stringify(state.cartItems));
        },
        removeFromCart : (state, action) => {
            state.cartItems = state.cartItems.filter(p => p.id !== action.payload.id);
            storeToLocalStorage(JSON.stringify(state.cartItems));
        },
        clearCart: (state) => {
            state.cartItems = [];

            storeToLocalStorage(JSON.stringify([]));
        }
    }
})



export const { addToCart, updateCart, removeFromCart, clearCart  } = cartSlice.actions;

export default cartSlice.reducer