import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import ScrollToTop from './ScrollToTop';

const description =
	'As a seasoned frontend developer, I`ve honed my skills in creating dynamic and responsive user interfaces using a tech stack that includes React and Vite for efficient development. My proficiency extends to utilizing JavaScript, HTML, SCSS, and Tailwind CSS to implement clean and maintainable code. With a strong grasp of state management through Redux, I have successfully contributed to projects that prioritize a seamless and engaging user experience. Furthermore, I excel in elevating user interfaces through captivating animations, leveraging the power of GSAP (GreenSock Animation Platform) and Framer Motion. My expertise allows me to implement smooth and interactive motion designs, ensuring a delightful and polished user experience across various frontend projects. ';

function SectionWorkDesc() {
	const { handleCursorLeave, handleCursorHeader } = useData();

	return (
		<div className='section-work-desc'>
			<motion.div
				className='section-work-desc--txt'
				initial={{ opacity: 0.2, y: 80 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
				viewport={{ once: true }}>
				<p className='paragraph'>{description}</p>
			</motion.div>
			<Link
				to='/work'
				className='section-work-desc--link'
				onMouseEnter={handleCursorHeader}
				onMouseLeave={handleCursorLeave}>
				<i className='ti ti-arrow-narrow-right'></i> Check work exaples
				<ScrollToTop />
			</Link>
		</div>
	);
}

export default SectionWorkDesc;
