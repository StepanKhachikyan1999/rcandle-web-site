import {configureStore} from '@reduxjs/toolkit';
import userReducer from "../features/user";
import themeReducer from '../features/changeColor'

const store = configureStore({
    reducer:{
        user: userReducer,
        theme: themeReducer
    },
})

export {store}