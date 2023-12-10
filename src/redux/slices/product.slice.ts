import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../shared';

type ProductState = {
    productList: IProduct[]
};

const initialState: ProductState = {
    productList: []
};

const productSlice = createSlice({
    name: 'productSlice',
    initialState: { ...initialState },
    reducers: {
        addProducts: (state, action) => {
            state.productList = action.payload;
        }
    },
});

export const {
    actions: { addProducts },
    reducer,
} = productSlice;
