import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addShopReducer = createSlice({
    name: "shops",
    initialState,
    reducers: {
        addShops: (state, action) => {
            state.push(action.payload);
            return state;
        },
        removeShops: (state, action) => {
            return state.filter(item => item.id !== action.payload);
        },
        completeShops: (state, action) => {
            return state.map((shop) => {

                if (shop.id === action.payload) {
                    return {
                        ...shop,
                        completed: true,
                    }
                }
                return shop;
            });
        }
    }
})
export const { addShops, removeShops, completeShops } = addShopReducer.actions;
export const reducer = addShopReducer.reducer;