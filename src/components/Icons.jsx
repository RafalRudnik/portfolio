import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { useIcons } from '../context/IconsContext';

gsap.registerPlugin(ScrollTrigger);

function Icons() {
	return (
		<div className='icons'>
			<IconsLeft />
			<IconsMiddle />
			<IconsRight />
		</div>
	);
}

export default Icons;

function IconsLeft() {
	const { dispatch } = useIcons();

	const react = useRef(null);
	const sass = useRef(null);

	useEffect(function () {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: react.current,
				start: 'top 70%',
			},
		});

		tl.to(react.current, {
			y: 0,
			x: 0,
			opacity: 1,
			duration: 0.7,
			ease: 'none',
		}).to(react.current, {
			rotate: 360,
			duration: 10,
			repeat: -1,
			ease: 'linear',
		});
	}, []);
	useEffect(function () {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: sass.current,
				start: 'top 70%',
			},
		});

		tl.to(sass.current, {
			y: 0,
			x: 0,
			opacity: 1,
			duration: 0.5,
			ease: 'none',
		}).to(sass.current, {
			rotate: 360,
			duration: 25,
			repeat: -1,
			ease: 'linear',
		});
	}, []);

	return (
		<div className='icons-container'>
			<div
				className='icons-icon icons-icon--react'
				ref={react}
				onMouseEnter={() => dispatch({ type: 'react' })}>
				<img src='./img/icons/react.svg' alt='react' />
			</div>
			<div
				className='icons-icon icons-icon--sass'
				ref={sass}
				onMouseEnter={() => dispatch({ type: 'sass' })}>
				<img src='./img/icons/sass.svg' alt='sass' />
			</div>
		</div>
	);
}
function IconsMiddle() {
	const { dispatch } = useIcons();

	const htmlIcon = useRef(null);
	const jsIcon = useRef(null);

	useEffect(function () {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: htmlIcon.current,
				start: 'top 70%',
			},
		});

		tl.to(htmlIcon.current, {
			y: 0,
			opacity: 1,
			scale: 1,
			duration: 0.5,
		}).to(htmlIcon.current, {
			rotate: -360,
			duration: 45,
			repeat: -1,
			ease: 'linear',
		});
	}, []);
	useEffect(function () {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: jsIcon.current,
				start: 'top 100%',
			},
		});

		tl.to(jsIcon.current, {
			y: 0,
			opacity: 1,
			scale: 1,
			duration: 1,
			ease: 'bounce',
		}).to(jsIcon.current, {
			rotate: 360,
			duration: 45,
			repeat: -1,
			ease: 'linear',
		});
	}, []);

	return (
		<div className='icons-container'>
			<div
				className='icons-icon icons-icon--html'
				ref={htmlIcon}
				onMouseEnter={() => dispatch({ type: 'html' })}>
				<img src='./img/icons/html-124.svg' alt='html'></img>
			</div>
			<div
				className='icons-icon icons-icon--vite'
				onMouseEnter={() => dispatch({ type: 'vite' })}>
				<img src='./img/icons/vite.svg' alt='vite'></img>
			</div>
			<div
				className='icons-icon icons-icon--js'
				ref={jsIcon}
				onMouseEnter={() => dispatch({ type: 'js' })}>
				<img src='./img/icons/js01.svg' alt='java script'></img>
			</div>
		</div>
	);
}
function IconsRight() {
	const { dispatch } = useIcons();

	const reduxIcon = useRef(null);
	const taiIcon = useRef(null);

	useEffect(function () {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: reduxIcon.current,
				start: 'top 70%',
			},
		});

		tl.to(reduxIcon.current, {
			y: 0,
			x: 0,
			opacity: 1,
			duration: 0.7,
			ease: 'bounce',
		}).to(reduxIcon.current, {
			rotate: 360,
			duration: 15,
			repeat: -1,
			ease: 'linear',
		});
	}, []);
	useEffect(function () {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: taiIcon.current,
				start: 'top 70%',
			},
		});

		tl.to(taiIcon.current, {
			y: 0,
			x: 0,
			opacity: 1,
			duration: 0.6,
			ease: 'none',
		}).to(taiIcon.current, {
			rotate: -360,
			duration: 19,
			repeat: -1,
			ease: 'linear',
		});
	}, []);

	return (
		<div className='icons-container'>
			<div
				className='icons-icon icons-icon--redux'
				ref={reduxIcon}
				onMouseEnter={() => dispatch({ type: 'redux' })}>
				<img src='./img/icons/redux-fill.svg' alt='redux' />
			</div>
			<div
				className='icons-icon icons-icon--tailwind'
				ref={taiIcon}
				onMouseEnter={() => dispatch({ type: 'tailwind' })}>
				<img src='./img/icons/tailwind-css.svg' alt='tailwind' />
			</div>
		</div>
	);
}
