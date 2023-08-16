import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    cart: [],
    totalQuantity: 0,
    subTotal: 0,
}

const cartSlice = createSlice({
    name: 'cartInfo',
    initialState,
    reducers: {
        addToCart(state, action) {
            let findItem = state.cart.findIndex(item => item.id === action.payload.id)
            if (findItem !== -1) {
                state.cart[findItem].quantity += 1
            } else {
                state.cart.push(action.payload)
            }
            state.totalQuantity += 1
            state.subTotal += action.payload.currentPrice
        },
        removeFromCart(state, action) {
            const removedItemId = action.payload;

            const removedItem = state.cart.find(item => item.id === removedItemId);
            if (removedItem) {
                state.cart = state.cart.filter(item => item.id !== removedItemId)
                state.totalQuantity -= removedItem.quantity;
                state.subTotal -= removedItem.currentPrice * removedItem.quantity;
            }


        }
    }
})

export default cartSlice.reducer
export const { addToCart, removeFromCart } = cartSlice.actions