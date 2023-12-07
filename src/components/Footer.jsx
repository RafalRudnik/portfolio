import { useData } from '../context/DataContext';

function Footer() {
	const date = new Date().getFullYear();

	const { handleCursorHeader, handleCursorLeave } = useData();

	return (
		<div className='container-fluid footer'>
			<p>&copy; {date} BNC Rafał Rudnik</p>
			<p>Gdańsk Poland</p>
			<p onMouseEnter={handleCursorHeader} onMouseLeave={handleCursorLeave}>
				<a href='https://bnc-web.com/' target='_blank' rel='noreferrer'>
					BNC WEB
				</a>{' '}
				|{' '}
				<a href='https://rafal-rudnik.com/' target='_blank' rel='noreferrer'>
					Rafał Rudnik
				</a>
			</p>
		</div>
	);
}

export default Footer;
