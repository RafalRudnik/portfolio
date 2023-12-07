import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useData } from '../context/DataContext';

const slideData = [
	{
		title: 'Agata Lopato psychologist',
		desc: 'Made with Vite, React, SCSS, Gsap and Framer motion',
		link: 'https://agatalopato.pl/',
		img: './img/work_agata.png',
	},
	{
		title: 'Piggy bank wallet',
		desc: 'Made with Vite, React, Redux toolkit, Tailwind CSS, Framer motion',
		link: 'https://precious-unicorn-2fcd14.netlify.app',
		img: './img/work_piggy.png',
	},
	{
		title: 'BNC Web-Dev',
		desc: 'Made with React, Gsap, SCSS, including dark/light mode',
		link: 'https://bnc-web.com/',
		img: './img/work_bnc.png',
	},
	{
		title: 'Redcorridor Gallery',
		desc: 'Made with Vite, React, Redux toolkit, Gsap, SCSS, Framer motion. Including dark / light mode',
		link: 'https://sage-fairy-8aa798.netlify.app',
		img: './img/work_redc.png',
	},
];

function WorkSliderSlide() {
	const [isSticky, setSticky] = useState(false);
	const { setSelectedWork } = useData();
	const { scrollYProgress } = useScroll();
	const x = useTransform(scrollYProgress, [-0.2, 1], ['100%', '-75%']);

	function handleScroll() {
		const offset = window.scrollY;

		// Adjust the offset value based on your design
		if (offset > 1.8 * window.innerHeight) {
			setSticky(true);
		} else {
			setSticky(false);
		}
	}

	// Attach the scroll event listener
	useEffect(function () {
		window.addEventListener('scroll', handleScroll);

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<motion.div
			className={`workSlider-slide ${isSticky ? 'stickySlide' : ''}`}
			style={{ x }}>
			{slideData.map((slide, index) => (
				<Slide slide={slide} key={index} setSelectedWork={setSelectedWork} />
			))}
		</motion.div>
	);
}

export default WorkSliderSlide;

function Slide({ slide, setSelectedWork }) {
	const { ref: myRef, inView: slideInView } = useInView();
	//https://www.npmjs.com/package/react-intersection-observer from here

	useEffect(
		function () {
			if (slideInView) {
				setSelectedWork(slide);
			}
		},
		[slideInView, setSelectedWork, slide]
	);

	return (
		<div className='workSlider-slide--div'>
			<motion.div
				className='workSlider-slide--img'
				initial={{ scale: 1.2, y: '-5%' }}
				whileInView={{ scale: 1, y: '0%' }}
				transition={{ duration: 1, delay: 0.3 }}
				ref={myRef}>
				<img src={slide.img} alt={slide.title}></img>
			</motion.div>
		</div>
	);
}
