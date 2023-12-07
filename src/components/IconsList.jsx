import { useIcons } from '../context/IconsContext';

const items = [
	'Vite',
	'React',
	'SASS',
	'HTML',
	'Java Script',
	'Redux',
	'Tailwind CSS',
];

function IconsList() {
	const {
		reactIcon,
		viteIcon,
		sassIcon,
		htmlIcon,
		jsIcon,
		reduxIcon,
		tailwindIcon,
	} = useIcons();

	return (
		<ul className='icons-list'>
			<li
				className={`icons-list--item ${
					reactIcon ? 'icons-list--visable' : ''
				}`}>
				{items[1]}
			</li>
			<li
				className={`icons-list--item ${viteIcon ? 'icons-list--visable' : ''}`}>
				{items[0]}
			</li>
			<li
				className={`icons-list--item ${sassIcon ? 'icons-list--visable' : ''}`}>
				{items[2]}
			</li>
			<li
				className={`icons-list--item ${htmlIcon ? 'icons-list--visable' : ''}`}>
				{items[3]}
			</li>
			<li className={`icons-list--item ${jsIcon ? 'icons-list--visable' : ''}`}>
				{items[4]}
			</li>
			<li
				className={`icons-list--item ${
					reduxIcon ? 'icons-list--visable' : ''
				}`}>
				{items[5]}
			</li>
			<li
				className={`icons-list--item ${
					tailwindIcon ? 'icons-list--visable' : ''
				}`}>
				{items[6]}
			</li>
		</ul>
	);
}

export default IconsList;
