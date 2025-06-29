import type { RootState } from "@/redux/store";
import type { ITask } from "@/Type";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    tasks: ITask[],
    filter: "all" | "high" | "midium" | "low"
}

const initialState: InitialState = {
    tasks: [
        {
            id: "baldd",
            title: "learn redux",
            description: "akjfasd",
            dueDate: "2025-30",
            isCompleted: false,
            priority: "high"
        },
        {
            id: "baldd",
            title: "learn mongoose",
            description: "akjfasd",
            dueDate: "2025-30",
            isCompleted: false,
            priority: "low"
        }
    ],
    filter: "all"
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {

    }
})

export const selectTask = (state: RootState) => {
    return state.task.tasks;
}

export const selectFilter = (state: RootState) => {
    return state.task.filter
}

export default taskSlice.reducer