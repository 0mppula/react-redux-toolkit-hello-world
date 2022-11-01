import { FC } from 'react';
import { ListContainer } from './listElements';

interface LoadingProps {
	message: string;
}

const Loading: FC<LoadingProps> = ({ message = 'Loading...' }) => {
	return (
		<ListContainer>
			<p className="error-loading">{message}</p>
		</ListContainer>
	);
};

export default Loading;
