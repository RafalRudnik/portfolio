import { motion, useTransform, useScroll } from 'framer-motion';

function Paralax() {
	const { scrollYProgress } = useScroll();
	const scaleY = useTransform(scrollYProgress, [0, 0.2], [1, 0.1]);

	return <motion.div className='paralax' style={{ scaleY }}></motion.div>;
}

export default Paralax;
