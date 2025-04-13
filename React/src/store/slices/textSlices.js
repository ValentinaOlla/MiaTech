import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: []
};

const textSlice = createSlice({
   name: "todos",
   initialState,
   reducers: {
    addTodo(state, action) {
        state.todos.push(action.payload);
    },
    removeTodo(state, action) {
        state.todos = state.todos.filter((t) => t.id !== action.payload);
    },
   },
});

export const { addTodo, toggleTodo, removeTodo } = textSlice.actions;
export default textSlice.reducer;