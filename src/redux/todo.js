import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData, updateData, deleteData, addData } from "./actionHelpers";

const initialState = {
	is_loaded: false,
	list: [],
};

export const fetchTaskList = createAsyncThunk(
	"tasks/loadTaskListStatus",
	async () => {
		const taskList = await fetchData();
		return taskList;
	}
);

export const updateTask = createAsyncThunk(
	"tasks/updateTaskStatus",
	async (task) => {
		await updateData(task.id, task.completed);
		return task.index;
	}
);

export const deleteTask = createAsyncThunk(
	"tasks/deleteTaskStatus",
	async (task) => {
		await deleteData(task.id);
		return task.index;
	}
);

export const addTask = createAsyncThunk("tasks/addTaskStatus", async (task) => {
	await addData(task.text);
	return task.text;
});

export const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(fetchTaskList.fulfilled, (state, action) => {
			return { list: action.payload, is_loaded: true };
		});
		builder.addCase(updateTask.fulfilled, (state, action) => {
			return {
				...state,
				is_loaded: false,
				list: state.list.map((item, index) => {
					if (index === Number(action.payload)) {
						return { ...item, completed: !item.completed };
					} else {
						return item;
					}
				}),
			};
		});
		builder.addCase(deleteTask.fulfilled, (state, action) => {
			return {
				...state,
				is_loaded: false,
				list: state.list.filter(
					(item, index) => index !== Number(action.payload)
				),
			};
		});
		builder.addCase(addTask.fulfilled, (state, action) => {
			return {
				...state,
				is_loaded: false,
				list: state.list.concat([{ text: action.payload, completed: false }]),
			};
		});
	},
});

export default todoSlice.reducer;
