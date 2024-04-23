import { configureStore } from "@reduxjs/toolkit";
import city from "./citySlice";

export const store = configureStore({
    reducer: {
        city
    }
})
