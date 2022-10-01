import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    products: []
}

const compareListSlice = createSlice({

    name: "compareListSlice",
    initialState: initialState,
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter((product) => {
                if (product.id !== action.payload.id) {
                    return product;
                }
            });
        }
    }

});

export { compareListSlice };
export const { addProduct, removeProduct } = compareListSlice.actions;
export default compareListSlice.reducer;