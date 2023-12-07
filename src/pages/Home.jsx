import Header from '../components/Header';
import SectionAbout from '../components/SectionAbout';
import SectionContact from '../components/SectionContact';
import SectionWork from '../components/SectionWork';

function Home() {
	return (
		<section className='container-fluid'>
			<Header />
			<SectionWork />
			<SectionAbout />
			<SectionContact />
		</section>
	);
}

export default Home;
