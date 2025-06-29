import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./feature/task/taskSlice"

const store = configureStore({
    reducer: {
        task: taskReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;