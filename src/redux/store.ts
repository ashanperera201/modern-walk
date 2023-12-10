import {configureStore} from '@reduxjs/toolkit';

import {reducer as productReducer} from './slices/product.slice';

const store = configureStore({
    reducer: {
        productPackage: productReducer,
    },
});

export default store;
