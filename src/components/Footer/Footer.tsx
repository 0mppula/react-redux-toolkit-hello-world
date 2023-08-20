import { FC } from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
	background-color: var(--clr-dark);
	display: flex;
	justify-content: center;
	width: 100%;
	padding: 5rem 0 2rem 0;

	a {
		color: var(--clr-light);
	}
	span {
		color: var(--clr-light);
	}
`;

const Footer: FC = () => {
	return (
		<FooterContainer>
			<span>
				Developed by{' '}
				<a href="https://www.omarkraidie.com" target="_blank" rel="noopener noreferrer">
					Omar Kraidié
				</a>
			</span>
		</FooterContainer>
	);
};

export default Footer;
