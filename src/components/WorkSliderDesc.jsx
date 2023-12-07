import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useData } from '../context/DataContext';

function WorkSliderDesc() {
	const [isSticky, setSticky] = useState(false);
	const { selectedWork, handleCursorHeader, handleCursorLeave } = useData();

	function handleScroll() {
		const offset = window.scrollY;

		// Adjust the offset value based on your design
		if (offset > 2 * window.innerHeight) {
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
			className={`workSlider-desc ${isSticky ? 'stickyDesc' : ''}`}
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}>
			{selectedWork && (
				<>
					<h3>{selectedWork.title}</h3>
					<p>{selectedWork.desc}</p>
					<a
						href={selectedWork.link}
						target='_blank'
						rel='noreferrer'
						onMouseEnter={handleCursorHeader}
						onMouseLeave={handleCursorLeave}>
						<i className='ti ti-arrow-narrow-right'></i> Check page
					</a>
				</>
			)}
		</motion.div>
	);
}

export default WorkSliderDesc;
