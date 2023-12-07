import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { useEffect, useRef, useCallback } from 'react';

gsap.registerPlugin(TextPlugin);

function Header() {
	const cursor = useRef(null);
	const mainTxt = useRef(null);
	const hiTxt = useRef(null);

	let masterTl = gsap.timeline({ repeat: 0 }).pause();

	const handleWords = useCallback(
		function handleWords() {
			const words = ['Rafał Rudnik', 'Father', 'Frontend Dev'];
			words.map((word) => {
				let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 2 });
				tl.to(mainTxt.current, { duration: 1, text: word });
				masterTl.add(tl);
			});
		},
		[masterTl]
	);

	useEffect(function () {
		const blink = cursor.current;
		gsap.to(blink, { opacity: 0, ease: 'power2.inOut', repeat: -1 });
	}, []);

	useEffect(
		function () {
			const hi = hiTxt.current;
			gsap.to(hi, {
				duration: 1,
				delay: 0.5,
				ease: 'power4.inOut',
				scale: 1,
				onComplete: () => masterTl.play(),
			});
			handleWords();
		},
		[masterTl, handleWords]
	);

	useEffect(function () {
		const hi = mainTxt.current;
		gsap.to(hi, {
			duration: 1.5,
			delay: 26,
			text: 'Rafał Rudnik',
			ease: 'power4.inOut',
		});
	}, []);

	return (
		<header className='header'>
			<div className='header-img'>
				<img src='./img/HeroBig.jpg'></img>
			</div>
			<div className='header-desc'>
				<h2 className='header-desc-hi' ref={hiTxt}>
					Hi i{`'`}m
				</h2>
				<h1>
					<span className='header-desc--text' ref={mainTxt}></span>
					<span className='header-desc--cursor' ref={cursor}>
						_
					</span>
				</h1>
			</div>
		</header>
	);
}

export default Header;
