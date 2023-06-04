import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from 'axios';
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const initialState = {
    tasks: [],
    message: {"status": "", "statuCode": "", "message": ""},
    isLoading: false,
};

export const addTask = createAsyncThunk(
  'manage_task/addTask',
  async (initialPost, thunkAPI) => {
      try {
        const res = await axios.post(BACKEND_URL+'/tasks', initialPost)
        return res;
      } catch (err) {
        return thunkAPI.rejectWithValue({ error: err.message })
      }
  }
);

export const fetchTask = createAsyncThunk(
  'content/fetchContent',
  async () => {
    const res = await axios({
      url: BACKEND_URL+'/tasks',
      headers: { 'Content-Type': 'application/json' },
      method: "get"
    });
    return res
  }
)

export const deleteTask = createAsyncThunk(
  'manage_task/deleteTask',
  async (initialPost, thunkAPI) => {
      try {
        const res = await axios.delete(BACKEND_URL+'/tasks/'+initialPost.id, initialPost)
        return res;
      } catch (err) {
        return thunkAPI.rejectWithValue({ error: err.message })
      }
  }
);

const taskSlice = createSlice({
    name: "manage_task",
    initialState,
    
    reducers: {
      updateAlertMessage: (state, action) => {
        console.log(action.payload)
        state.message = {"status": action.payload.status, "statuCode": "", "message": action.payload.message};
      }
    },
    extraReducers: {
      [addTask.fulfilled]: (state, action) => {
          if(action.payload.status == 200){
            state.message = {"status": action.payload.status,"message": "Task added successfully"};
            state.tasks = action.payload.data.data
          }else{
            state.message = {"status": action.payload.status, "message": action.payload.message};
          }
      },
      [deleteTask.fulfilled]: (state, action) => {
          if(action.payload.status == 200){
            state.message = {"status": action.payload.status,"message": "Task deleted successfully"};
            state.tasks = action.payload.data.data
          }else{
            state.message = {"status": action.payload.status, "message": action.payload.message};
          }
      },
      [fetchTask.pending]: (state, action) => {
          state.isLoading = true
      },
      [fetchTask.fulfilled]: (state, action) => {
          state.isLoading = false
          state.tasks = action.payload.data
      },
      [fetchTask.rejected]: (state, action) => {
          state.isLoading = true
          state.message.message = action.error.message
      }
    }

});

export const { updateAlertMessage} = taskSlice.actions;
export default taskSlice.reducer;

