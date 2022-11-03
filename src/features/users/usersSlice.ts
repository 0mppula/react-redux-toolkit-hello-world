import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { userType } from '../../assets/interfaces';

interface usersStateType {
	users: userType[] | null;
	error: string;
	loading: boolean;
}

const initialState: usersStateType = {
	users: null,
	error: '',
	loading: true,
};

export const fetchUsers = createAsyncThunk('users/fetch-all', async (_, thunkAPI) => {
	try {
		const response = await axios.get('https://jsonplaceholder.typicode.com/users');
		const users = response.data;
		
		return users;
	} catch (error: any) {
		const message = error?.message || 'Error fetching the users';
		return thunkAPI.rejectWithValue(message);
	}
});

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		reset: () => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUsers.pending, (state) => {
				state.error = '';
				state.loading = true;
			})
			.addCase(fetchUsers.fulfilled, (state, action) => {
				state.error = '';
				state.loading = false;
				state.users = action.payload;
			})
			.addCase(fetchUsers.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string;
			});
	},
});

export const { reset } = usersSlice.actions;
export default usersSlice.reducer;
