import { configureStore } from '@reduxjs/toolkit';
import loginReducer from "../Slice/loginslice";

export default configureStore({
    reducer: {
        login: loginReducer,
    },
});
