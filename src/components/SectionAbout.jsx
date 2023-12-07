import SectionAboutList from './SectionAboutList';
import SectionHeader from './SectionHeader';

function SectionAbout() {
	const headerType = 'dark';

	return (
		<section className='container-fluid about'>
			<div className='about-bg'>
				<img src='./img/About_hero.jpeg' alt='hero bacground'></img>
			</div>
			<div className='container'>
				<SectionHeader headerType={headerType}>Who am i?</SectionHeader>
			</div>
			<SectionAboutList />
		</section>
	);
}

export default SectionAbout;
