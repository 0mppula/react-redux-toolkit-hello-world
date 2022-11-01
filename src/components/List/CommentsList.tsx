import { FC } from 'react';
import { CommentsListProps } from '../../assets/interfaces';

import { ListItem, ListItemSection } from './listElements';

const CommentsList: FC<CommentsListProps> = ({ comments }) => {
	return (
		<>
			{comments?.map((comment, i: number) => (
				<ListItem key={(comment.id, i)}>
					<h2>Comment {i + 1}</h2>

					<ListItemSection>
						<p>Email</p>
						<p>{comment.email}</p>
					</ListItemSection>

					<ListItemSection>
						<p>Name</p>
						<p>{comment.name}</p>
					</ListItemSection>

					<ListItemSection>
						<p>Comment</p>
						<p>{comment.body}</p>
					</ListItemSection>
				</ListItem>
			))}
		</>
	);
};

export default CommentsList;
