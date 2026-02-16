import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  fetchUsersAPI,
  createUserAPI,
  updateUserAPI,
  deleteUserAPI,
} from "./userApi";

export const fetchUsers = createAsyncThunk(
    "/fetchUsers",
    async () =>{
        const res = await fetchUsersAPI();
        return res.data.user
    }
)

export const createUser = createAsyncThunk(
    "/createUser",
    async (data) =>{
        const res = await createUserAPI(data);
        return res.data.user
    }
)

export const updateUser = createAsyncThunk(
  "/updateUser",
  async ({ id, data }) => {
    const res = await updateUserAPI(id, data);
    return res.data.user
  }
);

export const deleteUser = createAsyncThunk(
  "/deleteUser",
  async (id) => {
    await deleteUserAPI(id);
    return id;
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch users";
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const index = state.users.findIndex(
          (u) => u._id === action.payload._id
        );
        state.users[index] = action.payload;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter(
          (u) => u._id !== action.payload
        );
      });
  },
});

export default userSlice.reducer;
