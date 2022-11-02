import { FC } from 'react';
import { ListContainer } from './listElements';

interface LoadingProps {
	loadingMessage?: string;
}

const Loading: FC<LoadingProps> = ({ loadingMessage = 'Loading...' }) => {
	return (
		<ListContainer>
			<p className="error-loading">{loadingMessage}</p>
		</ListContainer>
	);
};

export default Loading;
