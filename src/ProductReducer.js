import produce from 'immer';
import { useState } from 'react';
import { act } from 'react-dom/test-utils';
import { actions } from './actions';
import createReducer from './ReducerUtils';


// export const SET_PRODUCT_NAME = 'SET_PRODUCT_NAME';
// export const SET_PRODUCT_PRICE = 'SET_PRODUCT_PRICE';
const initialState = {

    items: [
        {
            id: 0,
            options:"",
            totalHours:"159",
            hours: "155",
            manualhours:"4",
            extraordinaryhours:"4",
            name: 'יואב שרון',
            idOfWorker:"203483924"
        },
        {
            id: 1,
            options:"",
            totalHours:"159",
            hours: "155",
            manualhours:"4",
            extraordinaryhours:"4",
            name: 'יואב שרון',
            idOfWorker:"203483924"
        },
        {
            id: 2,
            options:"",
            totalHours:"159",
            hours: "155",
            manualhours:"4",
            extraordinaryhours:"4",
            name: 'יואב שרון',
            idOfWorker:"203483924"
        },
        {
            id: 3,
            options:"",
            totalHours:"159",
            hours: "155",
            manualhours:"4",
            extraordinaryhours:"4",
            name: 'יואב שרון',
            idOfWorker:"203483924"
        },
        {
            id: 4,
            options:"",
            totalHours:"159",
            hours: "155",
            manualhours:"4",
            extraordinaryhours:"4",
            name: 'יואב שרון',
            idOfWorker:"203483924"},
            {
            id: 4,
            options:"",
            totalHours:"159",
            hours: "155",
            manualhours:"4",
            extraordinaryhours:"4",
            name: 'יואב שרון',
            idOfWorker:"203483924"
            
        },
        {
            id: 5,
            options:"",
            totalHours:"159",
            hours: "155",
            manualhours:"4",
            extraordinaryhours:"4",
            name: 'יואב שרון',
            idOfWorker:"203483924"
        },
        {
            id: 5,
            options:"",
            totalHours:"159",
            hours: "155",
            manualhours:"4",
            extraordinaryhours:"4",
            name: 'יואב שרון',
            idOfWorker:"203483924"
        },
        {
            id: 5,
            options:"",
            totalHours:"159",
            hours: "155",
            manualhours:"4",
            extraordinaryhours:"4",
            name: 'יואב שרון',
            idOfWorker:"203483924"
        },
        {
            id: 5,
            options:"",
            totalHours:"159",
            hours: "155",
            manualhours:"4",
            extraordinaryhours:"4",
            name: 'יואב שרון',
            idOfWorker:"203483924"
        },
        {
            id: 5,
            options:"",
            totalHours:"159",
            hours: "155",
            manualhours:"4",
            extraordinaryhours:"4",
            name: 'יואב שרון',
            idOfWorker:"203483924"
        },
        {
            id: 5,
            options:"",
            totalHours:"159",
            hours: "155",
            manualhours:"4",
            extraordinaryhours:"4",
            name: 'יואב שרון',
            idOfWorker:"203483924"
        },
        {
            id: 5,
            options:"",
            totalHours:"159",
            hours: "155",
            manualhours:"4",
            extraordinaryhours:"4",
            name: 'יואב שרון',
            idOfWorker:"203483924"
        },
        {
            id: 5,
            options:"",
            totalHours:"159",
            hours: "155",
            manualhours:"4",
            extraordinaryhours:"4",
            name: 'יואב שרון',
            idOfWorker:"203483924"
        },
        {
            id: 5,
            options:"",
            totalHours:"159",
            hours: "155",
            manualhours:"4",
            extraordinaryhours:"4",
            name: 'יואב שרון',
            idOfWorker:"203483924"
        },
        {
            id: 5,
            options:"",
            totalHours:"159",
            hours: "155",
            manualhours:"4",
            extraordinaryhours:"4",
            name: 'יואב שרון',
            idOfWorker:"203483924"
        },
        
        
        
       
    ]

   

}
const products = {
    addToCart(state = initialState, action) {
        const newCart = [...state.cart, action.payload];
        state.cart = newCart;
        console.log(initialState.cart);
    },
    add(state = initialState, action) {
        const index = action.payload;
        const newArray = [...state.cart];
        newArray[index].qty++;
        state.cart = newArray;
    },
    decrease(state = initialState, action) {
        const index = action.payload;
        const newArray = [...state.cart];
        if (newArray[index].qty > 0) {
            newArray[index].qty--;
        }
        state.cart = newArray;
    },
    delete(state = initialState.cart, action) {
        let arr = action.payload[1]
        arr = arr.filter((item) => item.id !== action.payload[1][action.payload[0]].id).map(({ id, name, image, price, qty, description }) => ({ id, name, image, price, qty, description }));
        state.cart = arr;
        // console.log(state.cart.length); ‏
    }

};
export default produce((state, action) => createReducer(state, action, products), initialState);
