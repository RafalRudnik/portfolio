import { useState, useEffect } from 'react';
import WorkSliderDesc from './WorkSliderDesc';
import { motion } from 'framer-motion';
import WorkSliderSlide from './WorkSliderSlide';

function WorkSlider() {
	const [isSticky, setSticky] = useState(false);

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
		<div className='workSlider container'>
			<motion.div
				className={`workSlider-logo ${isSticky ? 'sticky' : ''}`}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}>
				<p>Work</p>
			</motion.div>
			<WorkSliderDesc />
			<WorkSliderSlide />
		</div>
	);
}

export default WorkSlider;
