import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { useData } from '../context/DataContext';

gsap.registerPlugin(ScrollTrigger);

function SectionHeader({ headerType, children }) {
	const headerShadow = useRef(null);
	const { handleCursorLeave, handleCursorHeader } = useData();
	const standardClass = 'sectionHeader';

	useEffect(function () {
		const shadow = headerShadow.current;

		gsap.fromTo(
			shadow,
			{
				scaleX: 1,
			},
			{
				scaleX: 0,
				duration: 0.6,
				ease: 'easeInOut',
				scrollTrigger: {
					trigger: shadow,
					start: 'top 70%',
					end: 'top 40%',
					scrub: true,
				},
			}
		);
	}, []);

	return (
		<div
			className={`${standardClass} ${headerType}`}
			onMouseEnter={handleCursorHeader}
			onMouseLeave={handleCursorLeave}>
			<div className='sectionHeader-desc'>
				<h2>{children}</h2>
			</div>
			<div className='sectionHeader-bg' ref={headerShadow}></div>
		</div>
	);
}

export default SectionHeader;
