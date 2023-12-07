import { motion, useTransform, useScroll } from 'framer-motion';
import { useData } from '../context/DataContext';

const contactData = [
	{
		txt: 'Scroll for contact',
		progress: [0, 0.2],
		scaling: [1, 0],
	},
	{
		txt: 'We can work together as:',
		progress: [0.2, 0.4],
		scaling: [0, 1],
	},
	{
		txt: 'Freelancing, B2B or an employee',
		progress: [0.4, 0.6],
		scaling: [0, 1],
	},
	{
		txt: 'Feel free to contact:',
		progress: [0.6, 0.8],
		scaling: [0, 1],
	},
	{
		txt: 'BNC@RAFAL-RUNDNIK.COM',
		progress: [0.8, 1],
		scaling: [0, 1],
	},
];

const dotsData = [
	{
		scaling: [0, 6],
		progress: [0, 0.1],
		x: -900,
		y: 1000,
		blur: 4,
		initial: 300,
	},
	{
		scaling: [0, 8],
		progress: [0, 0.4],
		x: 900,
		y: 900,
		blur: 5,
		initial: -300,
	},
	{
		scaling: [0, 4],
		progress: [0.3, 0.6],
		x: -1000,
		y: -1000,
		blur: 3,
		initial: 300,
	},
	{
		scaling: [0, 4],
		progress: [0.6, 1],
		x: 1200,
		y: 1200,
		blur: 1,
		initial: -300,
	},
	{
		scaling: [0, 6],
		progress: [0.7, 1],
		x: 1000,
		y: 1300,
		blur: 5,
		initial: 300,
	},
	{
		scaling: [0, 8],
		progress: [0.7, 0.8],
		x: 1280,
		y: 1450,
		blur: 2,
		initial: -300,
	},
	{
		scaling: [0, 5],
		progress: [0.4, 1],
		x: -1440,
		y: -1860,
		blur: 4,
		initial: 300,
	},
];

function ContactMain() {
	return (
		<div className='container'>
			<div className='contact-main'>
				<ContactMainContent />
				<div className='contact-main--info'>
					<p>Contact</p>
				</div>
				<ContactDots />
			</div>
		</div>
	);
}

export default ContactMain;

function ContactMainContent() {
	return (
		<div className='contact-main--box'>
			<ContactMainTxt />
		</div>
	);
}

function ContactMainTxt() {
	return (
		<div className='contact-main--txt'>
			{contactData.map((data, index) => (
				<ContactMainTxtItem data={data} key={index} />
			))}
		</div>
	);
}

function ContactMainTxtItem({ data }) {
	const { handleCursorHeader, handleCursorLeave } = useData();
	const { scrollYProgress } = useScroll();
	const scale = useTransform(scrollYProgress, data.progress, data.scaling);

	return (
		<motion.p
			style={{ scale }}
			onMouseEnter={handleCursorHeader}
			onMouseLeave={handleCursorLeave}>
			{data.txt}
		</motion.p>
	);
}

function ContactDots() {
	return (
		<div className='contact-main--dots'>
			{dotsData.map((dot, index) => (
				<ContactDot dot={dot} key={index} />
			))}
		</div>
	);
}

function ContactDot({ dot }) {
	const { scrollYProgress } = useScroll();
	const scale = useTransform(scrollYProgress, dot.progress, dot.scaling);
	const opacity = useTransform(scrollYProgress, dot.progress, [0.8, 0]);
	const y = useTransform(scrollYProgress, dot.progress, [
		`${dot.initial}%`,
		`${dot.y}%`,
	]);
	const x = useTransform(scrollYProgress, dot.progress, [
		`${dot.initial}%`,
		`${dot.x}%`,
	]);

	return (
		<motion.div
			className='contact-main--dot'
			style={{
				scale,
				opacity,
				filter: `blur(${dot.blur}px)`,
				y,
				x,
			}}></motion.div>
	);
}

// filter: `blur(${dot.blur}px)`
