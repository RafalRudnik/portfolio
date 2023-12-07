import { motion, useTransform, useScroll } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useData } from '../context/DataContext';

const contactData = [
	{ transition: { duration: 0.6, delay: 0.4 }, title: `Let's` },
	{ transition: { duration: 0.6, delay: 0.8 }, title: 'Work' },
	{ transition: { duration: 0.6, delay: 1.2 }, title: 'Together' },
	{ transition: { duration: 0.6, delay: 1.8 }, title: `BNC@RAFAL-RUDNIK.COM` },
];

function SectionContact() {
	const { scrollYProgress } = useScroll();
	const [isDesctop, setIsDesctop] = useState(false);
	const desctop = useMediaQuery({ query: '(min-width: 768px)' });

	useEffect(() => {
		setIsDesctop(desctop);
	}, [desctop]);

	// const scale = useTransform(
	// 	scrollYProgress,
	// 	isDesctop ? [0, 1] : [0, 1],
	// 	isDesctop ? [1, 52] : [1, 16]
	// );
	const zoom = useTransform(
		scrollYProgress,
		isDesctop ? [0, 1] : [0, 1],
		isDesctop ? [1, 52] : [1, 30]
	);
	// const scale = useTransform(scrollYProgress, [0, 1], [1, 49]);
	const scaleY = useTransform(scrollYProgress, [0.2, 1], [1, 0.3]);

	return (
		<div className='container-fluid'>
			<motion.div className='sectionContact-bg' style={{ scaleY }}></motion.div>
			<div className='container'>
				<div className='sectionContact'>
					<div className='sectionContact-desc'>
						{contactData.map((item) => (
							<ContactItem item={item} key={item.title} />
						))}
					</div>
					<motion.div
						className='sectionContact-title'
						style={{ zoom }}
						key={isDesctop}>
						<p>BNC</p>
					</motion.div>
				</div>
			</div>
		</div>
	);
}

export default SectionContact;

function ContactItem({ item }) {
	const { handleCursorHeader, handleCursorLeave } = useData();

	return (
		<motion.p
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={item.transition}
			viewport={{ once: true }}
			onMouseEnter={handleCursorHeader}
			onMouseLeave={handleCursorLeave}>
			{item.title}
		</motion.p>
	);
}

// <motion.div
// 				className='sectionContact-bg'
// 				initial={{ scaleY: 1 }}
// 				whileInView={{ scaleY: 0.2 }}
// 				transition={{ duration: 1.4, delay: 0 }}></motion.div>
