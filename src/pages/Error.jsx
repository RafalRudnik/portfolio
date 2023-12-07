import { Link } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';

function Error() {
	return (
		<div className='container-fluid error'>
			<p>Upsss... nothing to explore here</p>
			<Link to='/'>
				<i className='ti ti-arrow-narrow-right'></i> Go back {`'home'`}
			</Link>
			<ScrollToTop />
		</div>
	);
}

export default Error;
