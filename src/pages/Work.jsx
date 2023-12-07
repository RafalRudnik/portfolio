import Paralax from '../components/Paralax';
import WorkHeader from '../components/WorkHeader';
import WorkSlider from '../components/WorkSlider';

function Work() {
	return (
		<section className='container-fluid'>
			<WorkHeader />
			<Paralax />
			<WorkSlider />
		</section>
	);
}

export default Work;
