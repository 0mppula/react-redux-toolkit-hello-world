import { FC } from 'react';
import { ListContainer } from './listElements';

interface ErrorProps {
	errorMessage: string;
}

const Error: FC<ErrorProps> = ({ errorMessage }) => {
	return (
		<ListContainer>
			<p className="error-loading">{`${errorMessage} 😥`}</p>
		</ListContainer>
	);
};

export default Error;
