import { FC } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Users from './pages/Users';
import Posts from './pages/Posts';
import Comments from './pages/Comments';
import All from './pages/All';
import ScrollToTop from './components/Tools/ScrollToTop';

const Container = styled.div`
	width: min(1200px, 95vw);
	margin: 0 auto;
	position: relative;
	min-height: 100vh;
	padding-top: 9rem;
`;

const App: FC = () => {
	return (
		<>
			<Container>
				<BrowserRouter>
					<Header />

					<Routes>
						<Route path="/users" element={<Users />} />
						<Route path="/posts" element={<Posts />} />
						<Route path="/comments" element={<Comments />} />
						<Route path="/all" element={<All />} />
						<Route path="*" element={<Navigate to="/users" />} />
					</Routes>

					<ScrollToTop />
				</BrowserRouter>
			</Container>

			<Footer />
		</>
	);
};

export default App;
