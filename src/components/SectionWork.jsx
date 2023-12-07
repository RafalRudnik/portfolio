import { IconsProvider } from '../context/IconsContext';
import Icons from './Icons';
import IconsList from './IconsList';
import SectionHeader from './SectionHeader';
import SectionWorkDesc from './SectionWorkDesc';
import SectionWorkTitle from './SectionWorkTitle';

function SectionWork() {
	return (
		<section className='container-fluid'>
			<div className='container'>
				<IconsProvider>
					<SectionHeader>What i do</SectionHeader>
					<Icons />
					<IconsList />
				</IconsProvider>
				<SectionWorkTitle />
				<SectionWorkDesc />
			</div>
		</section>
	);
}

export default SectionWork;
