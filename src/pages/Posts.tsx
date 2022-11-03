import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../app/store';

import { ListContainer, ListItemsHeader } from '../components/List/listElements';
import PostsList from '../components/List/PostsList';
import { fetchPosts } from '../features/posts/postsSlice';
import Loading from '../components/List/Loading';
import Error from '../components/List/Error';

const Posts: FC = () => {
	const postsState = useSelector((state: RootState) => state.posts);
	const { error, loading, posts } = postsState;

	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		const getPosts = async () => {
			if (!posts) {
				dispatch(fetchPosts());
			}
		};

		getPosts();
	}, [posts, dispatch, fetchPosts]);

	if (loading) {
		return <Loading />;
	}

	if (error) {
		return <Error errorMessage={error} />;
	}

	return (
		<ListContainer>
			<ListItemsHeader>
				<h2>Posts ({posts?.length})</h2>
			</ListItemsHeader>

			{posts && <PostsList posts={posts} />}
		</ListContainer>
	);
};

export default Posts;
