import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { postType } from '../../assets/interfaces';

interface postsStateType {
	posts: postType[] | null;
	error: string;
	loading: boolean;
}

const initialState: postsStateType = {
	posts: null,
	error: '',
	loading: false,
};

export const fetchPosts = createAsyncThunk('posts/fetch-all', async (_, thunkAPI) => {
	try {
		const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
		const posts = response.data;

		return posts;
	} catch (error: any) {
		const message = error?.message || 'Error fetching the users';
		return thunkAPI.rejectWithValue(message);
	}
});

export const postsSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		reset: () => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPosts.pending, (state) => {
				state.error = '';
				state.loading = true;
			})
			.addCase(fetchPosts.fulfilled, (state, action) => {
				state.error = '';
				state.loading = false;
				state.posts = action.payload;
			})
			.addCase(fetchPosts.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string;
			});
	},
});

export const { reset } = postsSlice.actions;
export default postsSlice.reducer;
