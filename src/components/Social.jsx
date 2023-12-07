import { useData } from '../context/DataContext';

function Social() {
	const { handleCursorEnter, handleCursorLeave } = useData();

	return (
		<div
			className='social'
			onMouseEnter={handleCursorEnter}
			onMouseLeave={handleCursorLeave}>
			<a
				href='https://www.linkedin.com/in/rafał-rudnik-9b2463283/'
				target='_blank'
				rel='noreferrer'>
				<i className='ti ti-brand-linkedin'></i>
			</a>
			<a href='https://github.com/RafalRudnik' target='_blank' rel='noreferrer'>
				<i className='ti ti-brand-github-filled'></i>
			</a>
		</div>
	);
}

export default Social;
