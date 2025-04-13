import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "./slices/textSlices"

export default configureStore({
    reducer: {
        todos: todoReducer,
    }
});
