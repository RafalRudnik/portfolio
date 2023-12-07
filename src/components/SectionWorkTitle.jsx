import { motion } from 'framer-motion';

function SectionWorkTitle() {
	return (
		<motion.div
			className='section-work--title'
			initial={{ opacity: 0.2, y: 80 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.7 }}
			viewport={{ once: true }}>
			<h3>
				React Frontend Engineer: Crafting Seamless User Experiences with
				Expertise in Web Development.
			</h3>
		</motion.div>
	);
}

export default SectionWorkTitle;
