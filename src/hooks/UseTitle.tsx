import { useEffect } from 'react';

/* Hook for changing the title on the page */
const useTitle = (title: string) => {
	useEffect((): (() => void) => {
		const defaultTitle = document.title;
		const appTitle = 'React Redux Toolkit Hello World';

		title && (document.title = `${title} | ${appTitle}`);

		// Clean up reset title to default title on component unmount.
		return () => (document.title = defaultTitle);
	}, [title]);
};

export default useTitle;
