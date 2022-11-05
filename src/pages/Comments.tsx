import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../app/store';
import { ListContainer, ListItemsHeader } from '../components/List/listElements';
import Loading from '../components/List/Loading';
import Error from '../components/List/Error';
import { fetchComments } from '../features/comments/commentsReducer';
import CommentsList from '../components/List/CommentsList';

const Comments: FC = () => {
	const commentsState = useSelector((state: RootState) => state.comments);
	const { error, loading, comments } = commentsState;

	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		const getComments = async () => {
			if (!comments) {
				dispatch(fetchComments());
			}
		};

		getComments();
	}, [comments, dispatch]);

	if (loading) {
		return <Loading />;
	}

	if (error) {
		return <Error errorMessage={error} />;
	}
	
	return (
		<ListContainer>
			<ListItemsHeader>
				<h2>Comments ({comments?.length})</h2>
			</ListItemsHeader>

			{comments && <CommentsList comments={comments} />}
		</ListContainer>
	);
};

export default Comments;
