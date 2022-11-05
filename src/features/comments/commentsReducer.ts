import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { commentType } from '../../assets/interfaces';

interface commentsStateType {
	comments: commentType[] | null;
	error: string;
	loading: boolean;
}

const initialState: commentsStateType = {
	comments: null,
	error: '',
	loading: false,
};

export const fetchComments = createAsyncThunk('comments/fetch-all', async (_, thunkAPI) => {
	try {
		const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
		const comments = response.data;

		// Only get 100 out of the 500 comments.
		return comments?.slice(0, 100);
	} catch (error: any) {
		const message = error?.message || 'Error fetching the comments';
		return thunkAPI.rejectWithValue(message);
	}
});

export const commentsSlice = createSlice({
	name: 'comments',
	initialState,
	reducers: {
		reset: () => initialState,
	},
	extraReducers: (builder) => {
		builder.addCase(fetchComments.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(fetchComments.fulfilled, (state, action) => {
			state.error = '';
			state.loading = false;
			state.comments = action.payload;
		});
		builder.addCase(fetchComments.rejected, (state, action) => {
			state.loading = false;
			state.error = action.payload as string;
		});
	},
});

export const { reset } = commentsSlice.actions;
export default commentsSlice.reducer;
