import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../app/store';
import { ListContainer, ListItemsHeader } from '../components/List/listElements';
import Loading from '../components/List/Loading';
import Error from '../components/List/Error';
import { fetchComments } from '../features/comments/commentsReducer';
import { fetchUsers } from '../features/users/usersSlice';
import { fetchPosts } from '../features/posts/postsSlice';
import CommentsList from '../components/List/CommentsList';
import UsersList from '../components/List/UsersList';
import PostsList from '../components/List/PostsList';

const All: FC = () => {
	const {
		users: usersState,
		posts: postsState,
		comments: commentsState,
	} = useSelector((state: RootState) => state);

	const { users, loading: UsersLoading, error: UsersError } = usersState;
	const { posts, loading: PostsLoading, error: PostsError } = postsState;
	const { comments, loading: CommentsLoading, error: CommentsError } = commentsState;

	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		const getAll = async () => {
			if (!users) {
				dispatch(fetchUsers());
			}

			if (!posts) {
				dispatch(fetchPosts());
			}

			if (!comments) {
				dispatch(fetchComments());
			}
		};

		getAll();
	}, [comments, dispatch]);

	if (UsersLoading || PostsLoading || CommentsLoading) {
		return <Loading />;
	}

	if (UsersError && PostsError && CommentsError) {
		return <Error errorMessage="Cannot get all items" />;
	}

	return (
		<ListContainer>
			{UsersLoading ? (
				<Loading loadingMessage="Loading users..." />
			) : (
				<>
					<ListItemsHeader>
						<h2>Users ({users?.length})</h2>
					</ListItemsHeader>
					{users && <UsersList users={users} />}
				</>
			)}

			{PostsLoading ? (
				<Loading loadingMessage="Loading posts..." />
			) : (
				<>
					<ListItemsHeader>
						<h2>Posts ({posts?.length})</h2>
					</ListItemsHeader>
					{posts && <PostsList posts={posts} />}
				</>
			)}

			{CommentsLoading ? (
				<Loading loadingMessage="Loading comments..." />
			) : (
				<>
					<ListItemsHeader>
						<h2>Comments ({comments?.length})</h2>
					</ListItemsHeader>
					{comments && <CommentsList comments={comments} />}
				</>
			)}
		</ListContainer>
	);
};

export default All;
