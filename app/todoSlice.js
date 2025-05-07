// import { createSlice, nanoid } from '@reduxjs/toolkit';

// const todoSlice = createSlice({
//   name: 'todos',
//   initialState: [],
//   reducers: {
//     addTodo: (state, action) => {
//       state.push({
//         id: nanoid(),
//         task: action.payload,
//         completed: false,
//       });
//     },
//     toggleStatus: (state, action) => {
//       const todo = state.find((t) => t.id === action.payload);
//       if (todo) {
//         todo.completed = !todo.completed;
//       }
//     },
//     deleteTodo: (state, action) => {
//       return state.filter((t) => t.id !== action.payload);
//     },
//   },
// });

// export const { addTodo, toggleStatus, deleteTodo } = todoSlice.actions;
// export default todoSlice.reducer;