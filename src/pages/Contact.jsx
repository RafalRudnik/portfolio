import ContactMain from '../components/ContactMain';
import { motion } from 'framer-motion';

function Contact() {
	return (
		<motion.section
			className='container-fluid'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.6 }}>
			<ContactMain />
		</motion.section>
	);
}

export default Contact;
