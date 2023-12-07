import { motion } from 'framer-motion';

function Crossword() {
	return (
		<motion.div
			className='crossword'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1, delay: 2 }}>
			<div className='crossword-item crossword-one'>
				<h3>R</h3>
				<h3>R</h3>
				<h3></h3>
				<h3>F</h3>
			</div>
			<div className='crossword-item crossword-two'>
				<h3>A</h3>
				<h3>A</h3>
				<h3>R</h3>
				<h3></h3>
			</div>
			<div className='crossword-item crossword-three'>
				<h3>O</h3>
				<h3>O</h3>
				<h3>F</h3>
				<h3></h3>
			</div>
			<div className='crossword-item crossword-four'>
				<h3>A</h3>
				<h3>N</h3>
				<h3>N</h3>
				<h3>F</h3>
			</div>
			<div className='crossword-item crossword-five'>
				<h3>Ł</h3>
				<h3>T</h3>
				<h3>T</h3>
				<h3>A</h3>
			</div>
			<div className='crossword-item crossword-six'>
				<h3>T</h3>
				<h3>E</h3>
				<h3>T</h3>
				<h3></h3>
			</div>
			<div className='crossword-item crossword-seven'>
				<h3>R</h3>
				<h3>R</h3>
				<h3>H</h3>
				<h3>N</h3>
			</div>
			<div className='crossword-item crossword-eight'>
				<h3>D</h3>
				<h3>D</h3>
				<h3>U</h3>
				<h3>E</h3>
			</div>
			<div className='crossword-item crossword-nine'>
				<h3>R</h3>
				<h3></h3>
				<h3>R</h3>
				<h3>D</h3>
			</div>
			<div className='crossword-item crossword-ten'>
				<h3>D</h3>
				<h3>D</h3>
				<h3>N</h3>
				<h3></h3>
			</div>
			<div className='crossword-item crossword-el'>
				<h3></h3>
				<h3>I</h3>
				<h3>I</h3>
				<h3>E</h3>
			</div>
			<div className='crossword-item crossword-tw'>
				<h3>V</h3>
				<h3>K</h3>
				<h3>V</h3>
				<h3></h3>
			</div>
		</motion.div>
	);
}

export default Crossword;
