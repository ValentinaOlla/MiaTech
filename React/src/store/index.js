import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "./slices/textSlices"

const store = configureStore({
    reducer: {
        todos: todoReducer,
    },
});

export default store;