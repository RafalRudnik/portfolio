import { Link, useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';
import ScrollToTop from './ScrollToTop';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

function Logo() {
	const { handleCursorEnter, handleCursorLeave, setMenuOpen } = useData();
	const navigate = useNavigate();

	function handleGoHome(e) {
		e.preventDefault();
		setMenuOpen(false);
		navigate('/');
		gsap.to(window, { duration: 1, scrollTo: { y: '#header', offsetY: 0 } });
	}

	return (
		<div
			className='logo'
			onMouseEnter={handleCursorEnter}
			onMouseLeave={handleCursorLeave}>
			<Link to='/' className='logo-link' onClick={handleGoHome}>
				<p>
					{`{`}
					<span>BNC</span>
					{`}`}
				</p>
			</Link>
			<ScrollToTop />
		</div>
	);
}

export default Logo;
