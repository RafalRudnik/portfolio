import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Error from './pages/Error';
import Home from './pages/Home';
import Work from './pages/Work';
import Contact from './pages/Contact';

const router = createBrowserRouter([
	{
		element: <AppLayout />,
		errorElement: <Error />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/work',
				element: <Work />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
		],
	},
]);

function App() {
	useEffect(function () {
		const lenis = new Lenis();

		lenis.on('scroll', (e) => {
			console.log(e);
		});

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
	}, []);

	return (
		<div className='App'>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
