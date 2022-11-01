import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { userType } from '../../assets/interfaces';

interface usersStateType {
	users: userType[] | null;
	error: string;
	loading: boolean;
}

const initialState: usersStateType = {
	users: null,
	error: '',
	loading: false,
};

const fetchUsers = () => {};

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		reset: () => initialState,
	},
	extraReducers: (builder) => {},
});

export const { reset } = usersSlice.actions;
export default usersSlice.reducer;
