import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Social from '../components/Social';
import Menu from '../components/Menu';
import CookiePage from '../components/CookiePage';
import ScrollToTop from '../components/ScrollToTop';
import { useEffect } from 'react';
import { useData } from '../context/DataContext';
import { motion } from 'framer-motion';

function AppLayout() {
	const { mousePosition, setMousePosition, cursorVariant, cookie, setCookie } =
		useData();

	useEffect(
		function () {
			const mouseMove = (e) => {
				setMousePosition({
					x: e.clientX,
					y: e.clientY,
				});
			};
			window.addEventListener('mousemove', mouseMove);

			return () => {
				window.removeEventListener('mousemove', mouseMove);
			};
		},
		[setMousePosition]
	);

	useEffect(
		function () {
			const cookieEaten = localStorage.getItem('cookie');
			if (cookieEaten) {
				setCookie(true);
			} else {
				setCookie(false);
			}
		},
		[setCookie]
	);

	const variants = {
		default: {
			x: mousePosition.x - 16,
			y: mousePosition.y - 16,
			backgroundColor: 'white',
			mixBlendMode: 'difference',
		},
		text: {
			height: 150,
			width: 150,
			x: mousePosition.x - 75,
			y: mousePosition.y - 75,
			mixBlendMode: 'difference',
			backgroundColor: 'white',
		},
		header: {
			height: 150,
			width: 150,
			x: mousePosition.x - 75,
			y: mousePosition.y - 75,
			mixBlendMode: 'difference',
			backgroundColor: 'white',
		},
	};

	return (
		<>
			{cookie ? (
				<div className='main'>
					<motion.div
						className='cursor'
						variants={variants}
						animate={cursorVariant}
					/>
					<Menu />
					<Navbar />
					<Social />
					<main>
						<Outlet />
						<ScrollToTop />
					</main>
					<Footer />
				</div>
			) : (
				<CookiePage />
			)}
		</>
	);
}

export default AppLayout;
