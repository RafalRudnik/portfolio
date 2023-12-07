import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { useEffect, useRef } from 'react';
import Crossword from './Crossword';

gsap.registerPlugin(TextPlugin);

function Header() {
	const hiTxt = useRef(null);

	useEffect(function () {
		const hi = hiTxt.current;
		gsap.to(hi, {
			duration: 1,
			delay: 0.5,
			ease: 'power4.inOut',
			scale: 1,
		});
	}, []);

	return (
		<header className='header' id='header'>
			<div className='header-img'>
				<img src='./img/HeroBig.jpg'></img>
			</div>
			<div className='header-desc'>
				<h2 className='header-desc-hi' ref={hiTxt}>
					Hi i{`'`}m
				</h2>
				<Crossword />
			</div>
		</header>
	);
}

export default Header;
