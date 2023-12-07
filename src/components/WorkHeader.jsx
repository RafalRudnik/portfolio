import { motion, useTransform, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useData } from '../context/DataContext';

function WorkHeader() {
	return (
		<div className='workHeader'>
			<HeaderMain />
		</div>
	);
}

export default WorkHeader;

function HeaderMain() {
	const [workBanner, setWorkBanner] = useState(false);
	const { scrollYProgress } = useScroll();
	const scale = useTransform(scrollYProgress, [0, 0.2], [1, 3]);
	const opacity = useTransform(scrollYProgress, [0, 0.2], [0.7, 0]);
	const rotate = useTransform(scrollYProgress, [0, 0.3], [0, 360]);

	useEffect(
		function () {
			const checkScroll = () => {
				// const headerElement = document.querySelector('.workHeader-main');

				// console.log(window.scrollY, headerElement.offsetTop);

				if (window.scrollY > 1.28 * window.innerHeight) {
					setWorkBanner(true);
				} else {
					setWorkBanner(false);
				}
			};
			document.addEventListener('scroll', checkScroll);
			return () => document.removeEventListener('scroll', checkScroll);
		},
		[setWorkBanner]
	);

	return (
		<div className={`workHeader-main ${workBanner ? 'workBanner' : ''}`}>
			<HeaderMainTitle />
			<motion.div
				className='workHeader-rotate'
				style={{ scale, opacity, rotate }}>
				<div className='workHeader-rotate--item workHeader-rotate--left'>
					<img src='./img/work_red.png' alt='webpage'></img>
				</div>
				<div className='workHeader-rotate--middle'>
					<div className='workHeader-rotate--top'>
						<img src='./img/Work_psycho.png' alt='webpage' />
					</div>
					<div className='workHeader-rotate--bottom'>
						<img src='./img/Work_rec.png' alt='webpage' />
					</div>
				</div>
				<div className='workHeader-rotate--item workHeader-rotate--right'>
					<img src='./img/Work_glass.png' alt='webpage' />
				</div>
			</motion.div>
		</div>
	);
}

function HeaderMainTitle() {
	const { scrollYProgress } = useScroll();

	const scale = useTransform(scrollYProgress, [0, 1], [0.1, 5]);

	return (
		<div className='workHeader-main--title'>
			<motion.p style={{ scale }}>Work</motion.p>
		</div>
	);
}
