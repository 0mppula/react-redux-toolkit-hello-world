import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice';

const store = configureStore({
	reducer: {
		users: usersReducer,
		// posts: postsReducer,
		// comments: commentsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
