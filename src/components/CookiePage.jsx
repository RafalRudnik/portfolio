import { motion } from 'framer-motion';
import { useData } from '../context/DataContext';

const data = [
	{
		text: 'This ',
	},
	{
		text: 'website ',
	},
	{
		text: 'uses ',
	},
	{
		text: 'cookies ',
	},
	{
		text: 'that are ',
	},
	{
		text: 'necessary ',
	},
	{
		text: 'for its ',
	},
	{
		text: 'functioning.',
	},
];

const fadeIn = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: (index) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.1 * index,
		},
	}),
};

function CookiePage() {
	return (
		<div className='cookie'>
			<CookieWords />
		</div>
	);
}

export default CookiePage;

function CookieWords() {
	return (
		<div className='cookie-words'>
			{data.map((word, index) => (
				<CookieWord word={word} key={index} index={index} />
			))}
			<div>
				<CookieOk />
			</div>
		</div>
	);
}

function CookieWord({ word, index }) {
	return (
		<motion.span
			variants={fadeIn}
			initial='initial'
			whileInView='animate'
			viewport={{ once: true }}
			custom={index}>
			{word.text}
		</motion.span>
	);
}

function CookieOk() {
	const { handleCloseCookie } = useData();

	return (
		<button className='cookie-btn' onClick={handleCloseCookie}>
			<i className='ti ti-arrow-narrow-right'></i> Continue
		</button>
	);
}
