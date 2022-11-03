import { configureStore } from '@reduxjs/toolkit';

import usersReducer from '../features/users/usersSlice';
import postsReducer from '../features/posts/postsSlice';

const store = configureStore({
	reducer: {
		users: usersReducer,
		posts: postsReducer,
		// comments: commentsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
